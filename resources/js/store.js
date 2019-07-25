import { writable } from 'svelte/store'
import axios from 'axios'

export let activeTab = writable('tv')

export let notifications = writable([])

export let config = writable(null, async set => {
  const { data } = await axios.get(`/api/v1/config`)
  set(data)

  return () => null
})
