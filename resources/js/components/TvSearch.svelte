<script>
import { createEventDispatcher } from 'svelte'
import { addNotification } from '../store'
import Loading from './Loading.svelte'
import Modal from './Modal.svelte'
import axios from 'axios'

let query = ''
let loading = false
let shows = []
let selectedShow
let showModal = false
const dispatch = createEventDispatcher()

const search = async () => {
  loading = true

  const { data } = await axios.post(`/api/v1/search/tv`, { query })
  loading = false
  shows = data.results
}

const launchModal = show => {
  selectedShow = show
  showModal = true
}

const download = async show => {
  addNotification({
    type: 'info',
    message: `Searching for ${show.name}...`
  })

  const { data } = await axios.get(`/api/v1/movies/${show.id}/torrent?add=true`)

  addNotification({
    type: 'info',
    message: `Download started for ${show.name}`
  })
}

const addToWatchlist = async show => {
  query = ''
  shows = []
  loading = true

  await axios.post(`/api/v1/watchlist/update`, {
    media_type: 'tv',
    media_id: show.id,
    watchlist: true
  })

  loading = false

  dispatch('refresh')
}
</script>

<div class="container">
  <form on:submit|preventDefault="{search}">
    <div class="flex items-center pb-8">
      <div class="flex-1 pr-4">
        <input bind:value="{query}" type="search" class="form-input md:text-xl block w-full" placeholder="Search for a show...">
      </div>
      <div class="w-24 text-right">
        <button type="submit" class="btn btn-primary md:text-xl">Search</button>
      </div>
    </div>
  </form>

  {#if loading}
    <Loading />
  {/if}

  <div class="flex flex-wrap -mx-4">
  {#each shows as show (show.id)}
    <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white rounded shadow overflow-hidden">
        {#if show.poster_path}
          <img class="block w-full" src="//image.tmdb.org/t/p/w342{show.poster_path}" alt={show.name} />
        {:else}
          <div class="px-4 py-2 text-lg border-b border-gray-400 text-gray-1000">{show.name}</div>
        {/if}

        <button
          class="block py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
          on:click="{() => dispatch('fetch', show)}"
        >
          Download episodes
        </button>

        <button
          class="block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
          on:click="{() => launchModal(show)}"
        >
          Info
        </button>

        <button
          class="block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
          on:click="{() => addToWatchlist(show)}"
        >
          Add to watchlist
        </button>
      </div>
    </div>
  {/each}
  </div>
</div>

{#if showModal}
<Modal on:close="{() => showModal = false}">
  <h3 slot="header">{selectedShow.name} <small class="ml-2">{selectedShow.first_air_date.substring(0, 4)}</small></h3>

  <p class="text-xl mb-6">{selectedShow.overview}</p>

  <a class="text-primary underline inline-block mb-6" href="//www.themoviedb.org/tv/{selectedShow.id}" target="_blank">View on TMDb</a>

  <button
    slot="action"
    class="btn btn-primary ml-2"
    on:click="{() => download(selectedShow)}"
    type="button"
  >
    Download
  </button>
</Modal>
{/if}