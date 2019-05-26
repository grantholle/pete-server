'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShowsSchema extends Schema {
  up () {
    this.create('shows', (table) => {
      table.increments()
      table.bigInteger('tmdb_id').notNullable()
      table.string('imdb_id').nullable()
      table.string('name').notNullable()
      table.integer('start_season').defaultTo(1)
      table.integer('start_episode').defaultTo(1)
      table.string('quality').defaultTo('HDTV')
      table.boolean('use_alt_quality').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('shows')
  }
}

module.exports = ShowsSchema
