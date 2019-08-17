import { writable } from 'svelte/store'
import axios from 'axios'
import nanoid from 'nanoid'

export let notifications = writable([])
let $notifications

notifications.subscribe(value => {
  $notifications = value
})

export let config = writable(null, async set => {
  const { data } = await axios.get(`/api/v1/config`)
  set(data)

  return () => null
})

export const addNotification = note => {
  const id = nanoid()

  notifications.set([
    ...$notifications,
    { ...note, id }
  ])

  autoClose(id)
}

export const autoClose = id => {
  setTimeout(() => {
    const index = $notifications.findIndex(n => n.id === id)

    notifications.set([
      ...$notifications.slice(0, index),
      ...$notifications.slice(index + 1)
    ])
  }, 4000)
}
