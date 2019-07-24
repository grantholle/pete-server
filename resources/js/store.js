import { writable } from 'svelte/store'

export let activeTab = writable('tv')

export let notifications = writable([])
