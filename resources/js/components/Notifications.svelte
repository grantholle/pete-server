<script>
import { fade } from 'svelte/transition'
import { notifications } from '../store'

const remove = id => {
  const index = $notifications.findIndex(n => n.id === id)

  notifications.set([
    ...$notifications.slice(0, index),
    ...$notifications.slice(index + 1)
  ])
}
</script>

<aside class="fixed top-0 right-0 overflow-y-scroll w-full max-w-sm px-4">
{#each $notifications as notification (notification.id)}
  <div
    transition:fade="{{ duration: 250 }}"
    class="notification {notification.type}"
    on:click="{() => remove(notification.id)}"
  >
    {notification.message}
  </div>
{/each}
</aside>