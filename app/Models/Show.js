'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Show extends Model {
  /**
   * Relationship to episodes
   */
  episodes () {
    return this.hasMany('App/Models/Episode', 'id', 'show_id')
  }
}

module.exports = Show
