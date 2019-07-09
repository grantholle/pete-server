'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DownloadSchema extends Schema {
  up () {
    this.create('downloads', (table) => {
      table.increments()
      table.string('name').nullable()
      table.string('hash').nullable().index()
      table.string('path', 500).nullable()
      table.string('url', 1000).nullable()
      table.boolean('rename').defaultTo(true)
      table.integer('transmission_id').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('downloads')
  }
}

module.exports = DownloadSchema
