'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Config extends Model {
  static get movieQualities () {
    return ['720p', '1080p', '2160p']
  }

  static get tvQualities () {
    return ['HDTV', '720p', '1080p']
  }
}

module.exports = Config
