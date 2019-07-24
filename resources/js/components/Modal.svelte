<script>
  import { createEventDispatcher } from 'svelte'
  import { fade, scale } from 'svelte/transition'

  const dispatch = createEventDispatcher()
</script>

<style>
  .modal {
    left: 50%;
    top: 50%;
    width: calc(100vw - 4rem);
    max-width: 32rem;
    max-height: calc(100vh - 4rem);
    transform: translate(-50%,-50%);
  }
</style>

<div
  class="bg-black opacity-50 fixed inset-0 w-full h-full"
  on:click="{() => dispatch('close')}"
  transition:fade="{{ duration: 250 }}"
></div>

<div
  class="modal fixed bg-white rounded-lg shadow-lg p-6 overflow-auto text-gray-1000"
  transition:scale="{{ duration: 250 }}"
>
  <slot name="header"></slot>

  <slot></slot>

  <div class="text-right">
    <button
      class="btn"
      on:click="{() => dispatch('close')}"
    >
      Close
    </button>

    <slot name="action"></slot>
  </div>
</div>
