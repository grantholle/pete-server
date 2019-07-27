'use strict'

const Event = use('Event')
const Logger = use('Logger')
const nanoid = require('nanoid')

module.exports = message => {
  const send = typeof message === 'string' ? {
    type: 'info',
    message
  } : message

  send.id = nanoid()

  Event.emit('notification::message', send)
  Logger[send.type](send.message)
}
