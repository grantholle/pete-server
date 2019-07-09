'use strict'

const PushBullet = require('pushbullet')
const Logger = use('Logger')
const Config = use('App/Models/Config')

/**
 * Sends a message to PushBullet
 *
 * @param {string} msg The message to send
 * @returns {Promise}
 */
module.exports = async msg => {
  const config = await Config.first()
  let pusher = null

  // If the config isn't set this will throw an error
  try {
    pusher = new PushBullet(config.pushbullet_token)
  } catch (e) {
    return
  }

  try {
    await pusher.note({}, 'Incoming from Pete!', msg)
  } catch (err) {
    Logger.error(`Pushbullet failed to send message: ${msg}`, err.message)
  }
}
