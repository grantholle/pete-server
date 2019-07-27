'use strict'

const Event = use('Event')
const Ws = use('Ws')

Event.on('notification::message', message => {
  Ws.getChannel('notifications')
    .topic('notifications')
    .broadcastToAll('message', message)
})
