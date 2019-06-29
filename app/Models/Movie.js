'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const movieSearch = require('../lib/search-movie')

class Movie extends Model {
  static get primaryKey () {
    return 'tmdb_id'
  }

  /**
   * Search for a movie torrent
   *
   * @param {string} quality 720p or 1080p
   */
  async search () {
    const result = await movieSearch(this)

    return result
  }
}

module.exports = Movie
