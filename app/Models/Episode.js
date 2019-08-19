'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Logger = use('Logger')
const Config = use('App/Models/Config')
const { clone, first } = require('lodash')
const sanitize = require('sanitize-filename')
const transmission = require('../lib/transmission')
const RarbgApi = require('rarbg')
const Eztv = require('eztv-b')
const path = require('path')
const notify = require('../lib/notify')

class Episode extends Model {
  /**
   * Gets the episode and season label for an episode
   *
   * @returns {string} label
   */
  getLabel () {
    const pad = n => {
      const pad = new Array(3).join('0')
      return (pad + n).slice(-pad.length)
    }

    return `S${pad(this.season)}E${pad(this.episode)}`
  }

  /**
   * Adds a magnet to transmission
   *
   * @param {App/Models/Show} show
   * @param {string} magnet The magnet url to be added
   */
  async addMagnet (show, magnet) {
    if (!magnet) {
      return Logger.info(`Attempting to add an invalid magnet for ${this.name}.`)
    }

    const config = await Config.last()

    if (typeof config.tv_directory !== 'string') {
      throw new Error(`Movie directory has not been configured!`)
    }

    const showName = sanitize(show.name)
    const episodeName = sanitize(`${showName} - ${this.getLabel()} - ${this.name}`)
    const directory = path.join(config.tv_directory, showName, episodeName)

    Logger.debug(`Adding magnet for ${episodeName}: ${magnet}`)

    await transmission.add(magnet, episodeName, directory)

    notify(`${episodeName} added to Transmission.`)

    this.added = true
  }

  /**
   * Searches for a magnet for this episode
   *
   * @param {App/Models/Show} show
   * @returns {string} magnet
   */
  async findMagnet (show) {
    const qualities = clone(Config.tvQualities)
    const search = async quality => {
      Logger.debug(`Searching for ${show.name} ${this.getLabel()} @ ${quality} (default is ${show.quality})`)

      // Check rarbg first for the desired quality
      const searchEztv = async () => {
        // Check eztv second because it's quite a big more
        // involved to search for an episode
        try {
          const magnet = await this.searchEztv(show, quality)

          // Either resolve the found magnet url
          // or false if we've gone through all qualities
          if (magnet || qualities.length === 0 || (!show.use_alt_quality && !magnet)) {
            return magnet
          }
        } catch (err) {
          return await search(qualities.shift())
        }

        // Everthing failed for this quality, try the next one
        return await search(qualities.shift())
      }

      try {
        const magnet = await this.searchRarbg(show, quality)

        if (magnet) {
          return magnet
        }

        return await searchEztv(show)
      } catch (err) {
        // If it fails for rarbg, attempt to do eztv
        return await searchEztv(show)
      }
    }

    // We'll remove the quality we want from the arrays
    // and search for that first, if that fails we'll continue
    // until we've exhausted all options
    const quality = qualities.splice(qualities.indexOf(show.quality), 1)

    return await search(first(quality))
  }

  /**
   * Searches for and adds a magnet if found
   *
   * @param {App/Models/Show} show
   */
  async findAndAddMagnet (show) {
    const magnet = await this.findMagnet(show)

    if (!magnet) {
      this.attempts = this.attempts + 1
      Logger.info(`Failed to find magnet for ${this.getLabel()} of ${show.name}. There ${this.attempts === 1 ? 'has' : 'have'} been ${this.attempts} attempt${this.attempts === 1 ? '' : 's'}`)
    } else {
      await this.addMagnet(show, magnet)
    }

    await this.save()

    return magnet
  }

  /**
   * Search rarbg for a movie based on certain criterion
   * Movie should be the object from TMdb
   *
   * @param {App/Models/Show} show
   * @param {string} quality
   * @returns {Promise}
   */
  async searchRarbg (show, quality) {
    const rarbg = new RarbgApi()
    const searchParams = {
      search_imdb: `tt${show.imdb_id}`,
      search_string: this.getLabel(),
      sort: 'seeders',
      category: quality === 'HDTV' ? rarbg.categories.TV_EPISODES : rarbg.categories.TV_HD_EPISODES
    }

    if (!show.imdb_id) {
      delete searchParams.search_imdb
      searchParams.search_string = `${show.name} ${searchParams.search_string}`
    }

    Logger.debug(`Searching rarbg for ${show.name} ${this.getLabel()} @ ${quality} using ${JSON.stringify(searchParams)}`)

    try {
      const results = await rarbg.search(searchParams)
      const goodQuality = quality === 'HDTV' ? first(results) : results.find(r => r.filename.includes(quality))

      return goodQuality ? goodQuality.download : false
    } catch (err) {
      if (err.message.toLowerCase().includes('no results')) {
        return false
      }

      throw err
    }
  }

  /**
   * Searches for a show episode for a given quality
   *
   * @param {App/Models/Show} show
   * @param {string} quality HDTV, 720p or 1080p
   * @returns {Promise} The magnet URL or false if no episode was found
   */
  async searchEztv (show, quality) {
    const eztv = new Eztv()

    Logger.debug(`Searching eztv for ${show.name} ${this.getLabel()} @ ${quality}`)

    const getAllSEpisodes = () => {
      const paginate = async page => {
        const pageSize = 100

        // If this show doesn't have an imdb id, skip it
        if (!show.imdb_id) {
          return
        }

        const res = await eztv.getTorrents({ imdb_id: show.imdb_id, page, limit: pageSize })

        if (res.torrents) {
          show.eztvCache.push(...res.torrents)
        }

        // If we haven't gathered all the torrents for this show
        // Increase the page and get more
        if (!res.torrents || res.torrents.length < pageSize) {
          return
        }

        return paginate(++page)
      }

      if (show.eztvCache.length !== 0) {
        return
      }

      return paginate(1)
    }

    await getAllSEpisodes()

    const highDefiniton = quality === '720p' || quality === '1080p'
    const regularDefintion = quality === 'HDTV'

    // Sort the torrents by seeds
    // so the episodes with the most
    // will be found first
    const torrent = show.eztvCache.sort((a, b) => a.seeds - b.seeds)
      .find(torrent => {
        if (this.season !== parseFloat(torrent.season) || this.episode !== parseFloat(torrent.episode)) {
          return false
        }

        // EZTV doesn't provide a quality property,
        // so we have to parse the title to determine the quality
        const goodQuality = (highDefiniton && torrent.title.indexOf(quality) !== -1) ||
          (regularDefintion && torrent.title.indexOf('720p') === -1 && torrent.title.indexOf('1080p') === -1)

        return goodQuality
      })

    // Either resolve the magnet url if one was found or false
    return torrent ? torrent.magnet_url : false
  }
}

module.exports = Episode
