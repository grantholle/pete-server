<script>
import TvWatchlist from './TvWatchlist.svelte'
import { activeTab } from '../store'

let currentTab
const tabs = [
  'tv',
  'movies'
]

activeTab.subscribe(value => {
  currentTab = value
})

const changeTabs = tab => {
  console.log(tab)
  activeTab.set(tab)
}
</script>

<header class="block w-full p-5 bg-indigo-500">
  <h1 class="leading-none">Pete</h1>
</header>

<nav class="flex">
{#each tabs as tab}
  <button
    class="tab-control flex-1 uppercase focus:outline-none py-2 text-xl hover:bg-indigo-500"
    class:active="{currentTab === tab}"
    on:click="{() => changeTabs(tab)}"
  >
    {tab}
  </button>
{/each}
</nav>

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

.tab-control.active {
  background: hsl(227, 50%, 59%);
}
</style>
