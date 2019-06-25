'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const yify = require('../lib/yify')

class Movie extends Model {
  static get primaryKey () {
    return 'tmdb_id'
  }

  /**
   * Search yify for a movie. Currently does not support 4k/2160p
   *
   * @param {string} quality 720p or 1080p
   */
  searchYify (quality) {
    if (quality === `2160p`) {
      return false
    }

    return yify(this.name, this.year, quality)
  }
}

module.exports = Movie
