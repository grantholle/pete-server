'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Movie extends Model {
  static get primaryKey () {
    return 'tmdb_id'
  }
}

module.exports = Movie
