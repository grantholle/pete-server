'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Config = use('App/Models/Config')
const Logger = use('Logger')
const path = require('path')
const sanitize = require('sanitize-filename')
const { clone } = require('lodash')
const moviedb = require('../lib/tmdb')
const transmission = require('../lib/transmission')
const yify = require('../lib/yify')
const rarbg = require('../lib/rarbg-movie')

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

    return await moviedb.movieInfo(this.tmdb_id)
  }

  /**
   * Adds a magnet to transmission
   *
   * @param {string} magnet The magnet url to be added
   */
  async addMagnet (magnet) {
    if (!magnet) {
      return Logger.info(`Attempting to add an invalid magnet for ${this.name}.`)
    }

    const config = await Config.last()

    if (typeof config.movie_directory !== 'string') {
      throw new Error(`Movie directory has not been configured!`)
    }

    const directory = path.join(config.movie_directory, sanitize(`${this.name} (${this.year})`))

    await transmission.add(magnet, this.name, directory)

    this.added = true
  }

  /**
   * Searches for a magnet for this movie
   *
   * @returns {string} magnet
   */
  async findMagnet () {
    const config = await Config.last()
    const source = config.use_yify ? yify : rarbg
    const fallbackSearcher = config.use_yify ? rarbg : false

    // We'll give yify a higher priority for searching... I guess
    const search = async (searcher, qualities) => {
      const quality = qualities.shift()
      let magnet = await searcher(this, quality)

      // If there's a result, then yay, return that
      // Or if there's no fallback search source and no more qualities to try
      if (magnet || (!fallbackSearcher && (qualities.length === 0 || !config.fallback_movie_quality))) {
        return magnet
      }

      // If there's a fallback source search using that
      if (fallbackSearcher) {
        magnet = await fallbackSearcher(this, quality)

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

  async fetchAndFill () {
    const results = await this.lookup()

    await this.fillFromTmdb(results)
  }

  async fillFromTmdb (results) {
    this.name = results.title
    this.year = Number(results.release_date.substring(0, 4))
  }
}

module.exports = Movie
