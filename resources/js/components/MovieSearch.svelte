<script>
import { addNotification } from '../store'
import Loading from './Loading.svelte'
import Modal from './Modal.svelte'
import axios from 'axios'

let query = ''
let loading = false
let movies = []
let selectedMovie
let showModal = false

const search = async () => {
  loading = true

  const { data } = await axios.post(`/api/v1/search/movies`, { query })
  loading = false
  movies = data.results
}

const launchModal = movie => {
  selectedMovie = movie
  showModal = true
}

const checkList = () => {
  axios.get(`/api/v1/watchlist/movies`)
}

const download = async movie => {
  addNotification({
    type: 'info',
    message: `Searching for ${movie.title}...`
  })

  const { data } = await axios.get(`/api/v1/movies/${movie.id}/torrent?add=true`)

  addNotification({
    type: 'info',
    message: `Download started for ${movie.title}`
  })
}
</script>

<div class="container">
  <form on:submit|preventDefault="{search}">
    <div class="flex items-center pb-8">
      <div class="flex-1 pr-4">
        <input bind:value="{query}" type="search" class="form-input text-xl block w-full" placeholder="Search movies...">
      </div>
      <div class="flex-none pr-4">
        <button type="submit" class="btn btn-primary text-xl">Search</button>
      </div>
      <div class="flex-none">
        <button type="button" class="btn btn-primary text-xl" on:click="{() => checkList()}">Check Watchlist</button>
      </div>
    </div>
  </form>

  {#if loading}
    <Loading />
  {/if}

  <div class="flex flex-wrap -mx-4">
  {#each movies as movie (movie.id)}
    <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white rounded shadow overflow-hidden">
        {#if movie.poster_path}
          <img class="block w-full" src="//image.tmdb.org/t/p/w342{movie.poster_path}" alt={movie.title} />
        {:else}
          <div class="px-4 py-2 text-lg border-b border-gray-400 text-gray-1000">{movie.title}</div>
        {/if}

        <button
          class="block py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
          on:click="{() => download(movie)}"
        >
          Download
        </button>

        <button
          class="block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
          on:click="{() => launchModal(movie)}"
        >
          Info
        </button>
      </div>
    </div>
  {/each}
  </div>
</div>

{#if showModal}
<Modal on:close="{() => showModal = false}">
  <h3 slot="header">{selectedMovie.title} <small class="ml-2">{selectedMovie.release_date.substring(0, 4)}</small></h3>

  <p class="text-xl mb-6">{selectedMovie.overview}</p>

  <a class="text-primary underline inline-block mb-6" href="//www.themoviedb.org/movie/{selectedMovie.id}" target="_blank">View on TMDb</a>

  <button
    slot="action"
    class="btn btn-primary ml-2"
    on:click="{() => download(selectedMovie)}"
    type="button"
  >
    Download
  </button>
</Modal>
{/if}