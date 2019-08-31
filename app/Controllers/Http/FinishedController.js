'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @type {typeof import('../../Models/Download')} */
const Download = use('App/Models/Download')
/** @type {typeof import('../../Models/Config')} */
const Config = use('App/Models/Config')
const Logger = use('Logger')
const { getInstance } = require('../../lib/transmission')
const ptt = require('parse-torrent-title')
const { first } = require('lodash')
const p = require('path')
const notify = require('../../lib/notify')
const pushbullet = require('../../lib/pushbullet')

class FinishedController {
  /**
   * Called when a download is finished in Transmission
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   * @param {Request} ctx.request
   */
  async index ({ request, response }) {
    const hash = request.input('hash', false)
    const title = request.input('title', '')
    const id = request.input('id', '')

    if (!hash) {
      return response.end()
    }

    const transmission = await getInstance()
    const download = await Download.findBy('hash', hash)
    let filename = ''

    if (!download) {
      const parsed = ptt.parse(title)

      // If there isn't a year either,
      // don't modify the files
      if (!parsed.year) {
        return response.end()
      }

      filename = `${parsed.title} (${parsed.year})`
    } else {
      filename = download.name
    }

    // Fetch the torrent info
    const { torrents } = await transmission.get(id)
    const torrentInfo = first(torrents)

    if (!torrentInfo) {
      Logger.error(`Could not get information for ${filename}`)

      return response.end()
    }

    const files = torrentInfo.files
    let index = 0

    // Iterate over all the files and rename appropriately
    for (const file of files) {
      index++

      // We're only interested in non-sample video files
      if (file.name.search(/.(mkv|avi|mp4|mov)$/gi) === -1) {
        continue
      }

      // If it's a sample, rename it to something that Plex won't pick up
      const newName = file.name.search(/(sample|rarbg\.com)/gi) === -1 ?
        filename + p.extname(file.name) : `unwanted ${index}`

      try {
        await transmission.rename(id, file.name, newName)
      } catch (err) {
        Logger.error(err)
      }
    }

    // Rename the root folder
    if (first(files).name.indexOf('/') !== -1) {
      try {
        await transmission.rename(id, p.dirname(first(files).name), filename)
      } catch (err) {
        Logger.error(err)
      }
    }

    // Log the message and send a notification about what has been completed
    let msg = `${filename} has finished downloading.`
    notify(msg)

    const config = await Config.last()

    if (config.notify_on_finish) {
      pushbullet(msg)
    }

    return response.end()
  }
}

module.exports = FinishedController
