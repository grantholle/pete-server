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

  Event.emit('notification::message', send)
  Logger[send.type](send.message)
}
