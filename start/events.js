const Event = use('Event')
const Ws = use('Ws')
const Logger = use('Logger')
const nanoid = require('nanoid')

Event.on('notification::message', message => {
  const send = typeof message === 'string' ? {
      type: 'info',
      message
    } : message

  send.id = nanoid()

  Ws.getChannel('notifications')
    .topic('notifications')
    .broadcastToAll('message', send)

  Logger[send.type](send.message)
})
