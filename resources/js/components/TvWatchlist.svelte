<script>
  import Loading from './Loading.svelte'
  import Modal from './Modal.svelte'
  import axios from 'axios'
  import { onMount } from 'svelte'

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

    const { data } = await axios.get('/api/v1/tv')
    shows = data.map(show => {
      show.removing = false
      show.fetching = false

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

  const configure = async (index, modal) => {
    modalLoading = true
    selectedShow = shows[index]
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

    await setAvailableSeasons(selectedShow)
    modalLoading = false
  }

  const setAvailableSeasons = async show => {
    const { data } = await axios.get(`/api/v1/tv/${show.id}/tmdb`)
    availableSeasons = data.seasons.reduce((seasons, season) => {
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
    modals.showConfigureModal = false
  }

  const fetchSeason = e => {
    axios.post(`/api/v1/tv/${showData.tmdb_id}/fetch`, {
      season: showData.start_season,
      start: showData.start_episode
    })

    modals.showFetchModal = false
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
              class="block py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
              on:click="{() => configure(index, 'showFetchModal')}"
              disabled="{show.fetching}"
            >
              Fetch season
            </button>

            <button
              class="block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-gray-1000"
              on:click="{() => configure(index, 'showConfigureModal')}"
              disabled="{show.removing}"
            >
              Configure
            </button>

            <button
              class="block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-red-{show.removing ? '200' : '800'}"
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
    <form on:submit|preventDefault="{fetchSeason}" class="py-4">
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
    </form>
  {/if}

  <button
    slot="action"
    class="btn btn-primary ml-2"
    on:click="{fetchSeason}"
    disabled="{modalLoading}"
    type="button"
  >
    Fetch
  </button>
</Modal>
{/if}
