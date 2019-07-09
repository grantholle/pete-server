'use strict'

const Transmission = require('transmission-promise')
const Config = use('App/Models/Config')
const Download = use('App/Models/Download')
const Logger = use('Logger')
const notify = require('./pushbullet')

const getInstance = async () => {
  const config = await Config.first()

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
  Logger.info(`${name}: ${magnet}`)
  const transmission = await getInstance()
  const config = await Config.first()

  const torrent = await transmission.addUrl(magnet, { 'download-dir': directory })
  const msg = `Started download for ${name}`
  Logger.info(msg)

  if (config.notify_on_start) {
    notify(msg)
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
