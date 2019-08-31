'use strict'

/** @typedef {typeof import('@adonisjs/framework/src/Event')} */
const Event = use('Event')
/** @typedef {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')
const nanoid = require('nanoid')

/**
 * Sends a message to the client and logs
 * the message using the logger
 *
 * @param {string} message The message to send
 */
module.exports = message => {
  const send = typeof message === 'string' ? {
    type: 'info',
    message
  } : message

  send.id = nanoid()

  try {
    Event.emit('notification::message', send)
  } catch (err) {
    Logger.error(err)
  }

  Logger[send.type](send.message)
}
