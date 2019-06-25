'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfigSchema extends Schema {
  up () {
    this.create('configs', (table) => {
      table.increments()
      table.string('tv_directory').nullable()
      table.string('movie_directory').nullable()
      table.string('transmission_username').nullable()
      table.string('transmission_pw').nullable()
      table.string('transmission_host').defaultTo(`localhost`)
      table.string('transmission_port').defaultTo(`9091`)
      table.string('pushbullet_token').nullable()
      table.boolean('notify_on_start').defaultTo(true)
      table.boolean('notify_on_finish').defaultTo(true)
      table.string('movie_quality').defaultTo(`1080p`)
      table.boolean('use_yify').defaultTo(false)
      table.boolean('fallback_movie_quality').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('configs')
  }
}

module.exports = ConfigSchema
