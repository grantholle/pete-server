'use strict'

const Transmission = require('transmission-promise')
const Config = use('App/Models/Config')
const Download = use('App/Models/Download')
const Logger = use('Logger')
const notify = require('./pushbullet')

const getInstance = async () => {
  const config = await Config.last()

  return new Transmission({
    username: config.transmission_username,
    password: config.transmission_pw,
    host: config.transmission_host,
    port: config.transmission_port
  })
}

/**
 * Adds a magnet to Transmission, creates an entry in the database,
 * and sends a notification
 *
 * @param {string} magnet The magnet url
 * @param {string} name The final name of the file following Plex's naming conventions
 * @param {string} directory The destination directory
 * @returns {Promise}
 */
module.exports.add = async (magnet, name, directory) => {
  Logger.debug(`${name}: ${magnet}`)

  const transmission = await getInstance()
  const config = await Config.last()

  const torrent = await transmission.addUrl(magnet, { 'download-dir': directory })

  if (config.notify_on_start) {
    notify(`Started download for ${name}`)
  }

  await Download.create({
    name,
    url: magnet,
    path: directory,
    transmission_id: torrent.id,
    hash: torrent.hashString
  })
}

module.exports.transmission = getInstance

module.exports.getInstance = getInstance
