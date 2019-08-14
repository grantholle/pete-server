<script>
  import Loading from './Loading.svelte'
  import Modal from './Modal.svelte'
  import TvSearch from './TvSearch.svelte'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import { addNotification } from '../store'

  let goToSettings = false
  let loading = true
  let shows = []
  let selectedShow = {}
  const modals = {
    showConfigureModal: false,
    showFetchModal: false
  }
  let modalLoading = false
  let showData = {}
  let availableSeasons = {}

  const getList = async () => {
    loading = true

    try {
      const { data } = await axios.get('/api/v1/tv')
      shows = data.map(show => {
        show.removing = false

        return show
      })
    } catch (err) {
      goToSettings = true
    }

    loading = false
  }

  const removeShow = async (show, index) => {
    shows[index].removing = true

    addNotification({
        type: 'info',
        message: `Removing ${show.name} from your watchlist...`
      })

    try {
      await axios.post(`/api/v1/watchlist/update`, {
        media_type: 'tv',
        media_id: show.id,
        watchlist: false
      })

      addNotification({
        type: 'info',
        message: `${show.name} removed from your watchlist`
      })

      shows.splice(index, 1)
      shows = shows
    } catch (err) {
      alert(err.message)
      shows[index].removing = false
    }
  }

  const configure = async (show, modal) => {
    modalLoading = true
    selectedShow = show
    modals[modal] = true

    // Fetch the show configuration
    try {
      const { data } = await axios.get(`/api/v1/tv/${selectedShow.id}`)
      showData = data
    } catch (err) {
      if (err.message.includes('404')) {
        // If the movie wasn't found, create it on the fly
        const { data } = await axios.post(`/api/v1/tv/${selectedShow.id}/tmdb`)
        showData = data
      }
    }

    availableSeasons = await setAvailableSeasons(selectedShow)
    modalLoading = false
  }

  const setAvailableSeasons = async show => {
    const { data } = await axios.get(`/api/v1/tv/${show.id}/tmdb`)

    return data.seasons.reduce((seasons, season) => {
      // Ignore season zero
      if (season.season_number !== 0) {
        seasons[season.season_number] = []
        let i = 1

        while (i <= season.episode_count) {
          seasons[season.season_number].push(i++)
        }
      }

      return seasons
    }, {})
  }

  const saveConfiguration = async e => {
    await axios.put(`/api/v1/tv/${showData.tmdb_id}`, showData)

    addNotification({
      type: 'info',
      message: `Configuration saved for ${showData.name}`
    })

    modals.showConfigureModal = false
  }

  const fetchSeason = show => {
    axios.post(`/api/v1/tv/${show.tmdb_id}/fetch`, {
      season: show.start_season,
      start: show.start_episode,
      force: show.force
    })

    modals.showFetchModal = false
  }

  onMount(getList)
</script>

<TvSearch
  on:refresh="{getList}"
  on:fetch="{e => configure(e.detail, 'showFetchModal')}"
/>

<div class="container">
  <h2>TV Watchlist</h2>

  {#if (loading)}
    <Loading />
  {:else if goToSettings}
    <p>Go to settings to configure and authorize Pete.</p>
  {:else}
    <div class="flex flex-wrap -mx-4">
      {#each shows as show, index (show.id)}
        <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-4 mb-8">
          <div class="bg-white rounded shadow overflow-hidden">
            <img class="block w-full" src="//image.tmdb.org/t/p/w342{show.poster_path}" alt={show.name} />

            <button
              class="block py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
              on:click="{() => configure(show, 'showFetchModal')}"
            >
              Download episodes
            </button>

            <button
              class="block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
              on:click="{() => configure(show, 'showConfigureModal')}"
            >
              Show settings
            </button>

            <button
              class="block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-red-{show.removing ? '200' : '800'}"
              on:click="{() => removeShow(show, index)}"
              disabled="{show.removing}"
            >
              Remove from watchlist
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

{#if modals.showConfigureModal}
<Modal on:close="{() => modals.showConfigureModal = false}">
  <h3 slot="header">{selectedShow.name}</h3>

  {#if modalLoading}
    <Loading color="hsl(210, 24%, 16%)" />
  {:else}
    <form on:submit|preventDefault="{saveConfiguration}" class="py-4">
      <label class="block">
        <span class="text-gray-700">Start season</span>
        <select bind:value="{showData.start_season}" class="form-select mt-1 block w-full">
          {#each Object.keys(availableSeasons) as season}
            <option value="{Number(season)}">{season}</option>
          {/each}
        </select>
      </label>

      <label class="block mt-4">
        <span class="text-gray-700">Start episode</span>
        <select bind:value="{showData.start_episode}" class="form-select mt-1 block w-full">
          {#each availableSeasons[showData.start_season] as episode}
            <option value="{episode}">{episode}</option>
          {/each}
        </select>
      </label>

      <label class="block mt-4">
        <span class="text-gray-700">Quality</span>
        <select bind:value="{showData.quality}" class="form-select mt-1 block w-full">
          <option value="HDTV">HDTV</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
        </select>
      </label>

      <div class="flex mt-4 mb-4">
        <label class="flex items-center">
          <input bind:checked="{showData.use_alt_quality}" type="checkbox" class="form-checkbox">
          <span class="ml-2">Use alternate quality when desired quality isn't found</span>
        </label>
      </div>
    </form>
  {/if}

  <button
    slot="action"
    class="btn btn-primary ml-2"
    on:click="{saveConfiguration}"
    disabled="{modalLoading}"
    type="button"
  >
    Save
  </button>
</Modal>
{/if}

{#if modals.showFetchModal}
<Modal on:close="{() => modals.showFetchModal = false}">
  <h3 slot="header">{selectedShow.name}</h3>

  {#if modalLoading}
    <Loading color="hsl(210, 24%, 16%)" />
  {:else}
    <form on:submit|preventDefault="{() => fetchSeason(showData)}" class="py-4">
      <label class="block">
        <span class="text-gray-700">Start season</span>
        <select bind:value="{showData.start_season}" class="form-select mt-1 block w-full">
          {#each Object.keys(availableSeasons) as season}
            <option value="{Number(season)}">{season}</option>
          {/each}
        </select>
      </label>

      <label class="block mt-4">
        <span class="text-gray-700">Start episode</span>
        <select bind:value="{showData.start_episode}" class="form-select mt-1 block w-full">
          {#each availableSeasons[showData.start_season] as episode}
            <option value="{episode}">{episode}</option>
          {/each}
        </select>
      </label>

      <div class="flex mt-4">
        <label class="flex items-center">
          <input bind:checked="{showData.force}" type="checkbox" class="form-checkbox">
          <span class="ml-2">Force download: if an episode has been downloaded previously, add again.</span>
        </label>
      </div>
    </form>
  {/if}

  <button
    slot="action"
    class="btn btn-primary ml-2"
    on:click="{() => fetchSeason(showData)}"
    disabled="{modalLoading}"
    type="button"
  >
    Download
  </button>
</Modal>
{/if}
