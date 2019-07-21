<script>
  import axios from 'axios'
  import { onMount } from 'svelte'

  let results = axios.get('/api/v1/tv')
</script>

<div class="container">
<h2>TV Watchlist</h2>

{#await results}
  <p class="text-center">Loading watchlist...</p>
{:then data}
  <div class="flex flex-wrap -mx-4">
    {#each data.data as show}
      <div class="w-1/2 sm:w-1/3 lg:w-1/4 px-4 mb-8">
        <img class="block w-full" src="//image.tmdb.org/t/p/w342{show.poster_path}" alt={show.name} />
      </div>
    {/each}
  </div>
{/await}
</div>
