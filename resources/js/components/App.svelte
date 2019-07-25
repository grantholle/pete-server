<script>
import TvWatchlist from './TvWatchlist.svelte'
import Notifications from './Notifications.svelte'
import Ws from '@adonisjs/websocket-client'
import { activeTab, notifications } from '../store'

const ws = Ws()
ws.connect()

ws.on('open', () => {
  const notes = ws.subscribe('notifications')

  notes.on('message', data => {
    notifications.set([
      ...$notifications,
      data
    ])

    setTimeout(() => {
      const index = $notifications.findIndex(n => n.id === data.id)

      notifications.set([
        ...$notifications.slice(0, index),
        ...$notifications.slice(index + 1)
      ])
    }, 4000)
  })
})

let currentTab
const tabs = [
  'tv',
  'movies',
  'settings'
]

activeTab.subscribe(value => {
  currentTab = value
})
</script>

<Notifications />

<header class="flex justify-between w-full p-5 bg-indigo-500 shadow-md">
  <h1 class="leading-none">Pete</h1>
  <nav>
  {#each tabs as tab}
    <button
      class="tab-control uppercase focus:outline-none py-1 px-2 mx-2"
      class:active="{currentTab === tab}"
      on:click="{() => activeTab.set(tab)}"
    >
      {tab}
    </button>
  {/each}
  </nav>
</header>


<div class="py-12">
{#if currentTab === 'tv'}
  <TvWatchlist />
{:else if (currentTab === 'movies')}
  <p>movies</p>
{/if}
</div>

<style>
.tab-control {
  transition: background-color 250ms ease;
}

.tab-control:last-child {
  margin-right: 0;
}

.tab-control.active {
  border-bottom-width: 1px;
  border-color: white;
}
</style>
