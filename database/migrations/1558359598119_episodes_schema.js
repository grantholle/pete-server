'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EpisodesSchema extends Schema {
  up () {
    this.create('episodes', (table) => {
      table.increments()
      table.bigInteger('show_id').references('id').inTable('shows')
      table.string('name')
      table.integer('season')
      table.integer('episode')
      table.boolean('added').defaultTo(false)
      table.integer('attempts').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('episodes')
  }
}

module.exports = EpisodesSchema
