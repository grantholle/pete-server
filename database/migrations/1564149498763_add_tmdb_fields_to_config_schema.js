'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddTmdbFieldsToConfigSchema extends Schema {
  up () {
    this.table('configs', table => {
      table.string('tmdb_key').nullable()
      table.string('tmdb_session').nullable()
    })
  }

  down () {
    this.table('configs', table => {
      table.dropColumn('tmdb_key')
      table.dropColumn('tmdb_session')
    })
  }
}

module.exports = AddTmdbFieldsToConfigSchema
