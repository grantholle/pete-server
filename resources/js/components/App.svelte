<script>
import { Router, Link, Route } from 'svelte-routing'
import TvWatchlist from './TvWatchlist.svelte'
import MovieSearch from './MovieSearch.svelte'
import Settings from './Settings.svelte'
import Notifications from './Notifications.svelte'
import Ws from '@adonisjs/websocket-client'
import { notifications, addNotification, config } from '../store'

const ws = Ws()
ws.connect()

ws.on('open', () => {
  const notes = ws.subscribe('notifications')

  notes.on('message', addNotification)
})

let alerts = []

config.subscribe(value => {
  if (!value) {
    return
  }

  const localAlerts = []

  if (
    !value.transmission_username ||
    !value.tv_directory ||
    !value.movie_directory ||
    !value.tmdb_key
  ) {
    localAlerts.push({
      type: `warning`,
      message: `<strong>Heads up!</strong> Your configuration isn't complete. Stuff won't work right...`
    })
  }

  alerts = localAlerts
})

const getProps = ({ location, href, isPartiallyCurrent, isCurrent }) => {
  const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent

  return {
    class: `tab-control uppercase focus:outline-none py-1 px-2 mx-2 ${isActive ? 'active' : ''}`
  }
}
</script>

<Router url="{false}">
  <Notifications />

  <header class="flex justify-between w-full p-5 bg-indigo-500 shadow-md">
    <h1 class="leading-none">Pete</h1>
    <nav class="flex items-center">
      <Link to="/" getProps="{getProps}">TV</Link>
      <Link to="/movies" getProps="{getProps}">Movies</Link>
      <Link to="/settings" getProps="{getProps}">Settings</Link>
    </nav>
  </header>

  <div class="py-12">
  {#if alerts.length > 0}
    <div class="container mb-8">
      {#each alerts as userAlert}
        <div class="alert p-3 my-2 shadow border rounded {userAlert.type}">
          {@html userAlert.message}
        </div>
      {/each}
    </div>
  {/if}

    <Route path="/" component="{TvWatchlist}" />
    <Route path="/movies" component="{MovieSearch}" />
    <Route path="/settings" component="{Settings}" />
  </div>

  <style>
  .tab-control:last-child {
    margin-right: 0;
  }

  .tab-control.active {
    border-bottom-width: 1px;
    border-color: white;
  }
  </style>
</Router>

