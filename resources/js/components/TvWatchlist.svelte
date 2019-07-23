<script>
  import Loading from './Loading.svelte'
  import axios from 'axios'
  import { onMount } from 'svelte'

  let loading = true
  let shows = []

  const getList = async () => {
    loading = true

    const { data } = await axios.get('/api/v1/tv')
    shows = data.map(show => {
      show.removing = false

      return show
    })

    loading = false
  }

  const removeShow = async (show, index) => {
    shows[index].removing = true

    try {
      await axios.post(`/api/v1/watchlist/update`, {
        media_type: 'tv',
        media_id: show.id,
        watchlist: false
      })

      shows.splice(index, 1)
      shows = shows
    } catch (err) {
      alert(err.message)
      shows[index].removing = false
    }
  }

  onMount(getList)
</script>

<div class="container">
  <h2>TV Watchlist</h2>

  {#if (loading)}
    <Loading />
  {:else}
    <div class="flex flex-wrap -mx-4">
      {#each shows as show, index (show.id)}
        <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-4 mb-8">
          <div class="bg-white rounded shadow overflow-hidden">
            <img class="block w-full" src="//image.tmdb.org/t/p/w342{show.poster_path}" alt={show.name} />

            <button
              class="block border-t boroder-b border-gray-400 py-2 w-full text-red-{show.removing ? '200' : '800'}"
              on:click="{() => removeShow(show, index)}"
              disabled="{show.removing}"
            >
              Remove
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
