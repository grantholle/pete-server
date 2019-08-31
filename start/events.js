'use strict'

const Event = use('Event')
const Ws = use('Ws')

Event.on('notification::message', message => {
  const topic = Ws.getChannel('notifications')
    .topic('notifications')

  if (topic) {
    topic.broadcastToAll('message', message)
  }
})
