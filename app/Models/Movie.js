'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Config = use('App/Models/Config')
const Logger = use('Logger')
const path = require('path')
const sanitize = require('sanitize-filename')
const { clone, first } = require('lodash')
const RarbgApi = require('rarbg')
const getMoviedb = require('../lib/tmdb')
const transmission = require('../lib/transmission')
const notify = require('../lib/notify')
const yify = require('yify-promise')

class Movie extends Model {
  static get primaryKey () {
    return 'tmdb_id'
  }

  /**
   * Looks up the movie in TMDb
   */
  async lookup () {
    if (!this.tmdb_id) {
      throw new Error(`This movie doesn't have an id to look up in TMDb. Set one first then attmept to look up.`)
    }

    const moviedb = await getMoviedb()

    return await moviedb.movieInfo(this.tmdb_id)
  }

  /**
   * Adds a magnet to transmission
   *
   * @param {string} magnet The magnet url to be added
   */
  async addMagnet (magnet) {
    if (!magnet) {
      return notify(`Attempting to add an invalid magnet for ${this.name}.`)
    }

    const config = await Config.last()

    if (typeof config.movie_directory !== 'string') {
      throw new Error(`Movie directory has not been configured!`)
    }

    const movieName = sanitize(`${this.name} (${this.year})`)
    const directory = path.join(config.movie_directory, movieName)

    try {
      await transmission.add(magnet, movieName, directory)
    } catch (err) {
      notify({
        type: 'error',
        message: err.message
      })
    }

    this.added = true
  }

  /**
   * Searches for a magnet for this movie
   *
   * @returns {string} magnet
   */
  async findMagnet () {
    const config = await Config.last()
    const source = config.use_yify ? 'searchYify' : 'searchRarbg'
    const fallbackSearcher = config.use_yify ? 'searchRarbg' : 'searchYify'

    // We'll give yify a higher priority for searching... I guess
    const search = async (searcher, qualities) => {
      const quality = qualities.shift()
      let magnet = await this[searcher](quality)

      // If there's a result, then yay, return that
      // Or if there's no fallback search source and no more qualities to try
      if (magnet || (!fallbackSearcher && (qualities.length === 0 || !config.fallback_movie_quality))) {
        return magnet
      }

      // If there's a fallback source search using that
      if (fallbackSearcher) {
        magnet = await this[fallbackSearcher](quality)

        if (magnet || (!config.fallback_movie_quality || qualities.length === 0)) {
          return magnet
        }

        return await search(source, qualities)
      }

      // No fallback and there is still other qualities
      return await search(source, qualities.shift())
    }

    return await search(source, clone(Config.movieQualities))
  }

  /**
   * Searches for and adds a magnet if found
   *
   * @returns {Promise<string>}
   */
  async findAndAddMagnet () {
    const magnet = await this.findMagnet()

    if (!magnet) {
      this.attempts = this.attempts + 1
    } else {
      await this.addMagnet(magnet)
    }

    await this.save()

    return magnet
  }

  /**
   * Fetches info from TMDb and populates
   * relevant properties
   *
   * @returns {Promise<void>}
   */
  async fetchAndFill () {
    const results = await this.lookup()

    await this.fillFromTmdb(results)
  }

  /**
   * Accepts the TMDb info and populates
   * properties
   *
   * @param {object} results The info from TMDb
   * @returns {Promise<void>}
   */
  async fillFromTmdb (results) {
    this.name = results.title
    this.year = Number(results.release_date.substring(0, 4))
  }

  /**
   * Search rarbg for a movie
   *
   * @param {string} quality
   * @returns {Promise<string>}
   */
  async searchRarbg (quality) {
    const rarbg = new RarbgApi()
    const searchParams = {
      search_string: `${sanitize(this.name)} ${this.year || ''}`.trim(),
      sort: 'seeders',
      category: rarbg.categories[`MOVIES_X264_${quality.replace('p', '')}`]
    }

    try {
      Logger.debug(`Search rarbg for ${this.name} using search params ${JSON.stringify(searchParams)}`)
      const results = await rarbg.search(searchParams)

      return first(results).download
    } catch (err) {
      if (err.message.toLowerCase().includes('no results')) {
        return false
      }

      throw err
    }
  }

  /**
   * Search rarbg for a movie based on certain criterion
   * Movie should be the object from TMdb
   *
   * @param {string} quality
   * @returns {Promise<string>}
   */
  async searchYify (quality) {
    Logger.debug(`Search yify for ${this.name} @ ${quality}`)
    const { movies } = await yify.search({
      query_term: this.name,
      quality
    })

    // Get the movie with the matching release year
    const movie = this.year ?
      movies.find(item => item.year === this.year) : first(movies)

    // If no movie matched, return a falsy result
    if (!movie) {
      return false
    }

    const torrent = first(movie.torrents)

    return torrent ? torrent.url : false
  }
}

module.exports = Movie
