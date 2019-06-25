'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.string(`name`)
      table.integer(`year`).nullable()
      table.string(`tmdb_id`)
      table.string(`imdb_id`).nullable()
      table.boolean(`added`).defaultTo(false)
      table.integer(`attempts`).defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
