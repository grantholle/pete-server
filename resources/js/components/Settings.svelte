<script>
import { config, notifications } from '../store'
import axios from 'axios'

const saveConfig = async () => {
  await axios.post(`/api/v1/config`, $config)

  const id = (new Date()).getMilliseconds().toString()

  notifications.set([
    ...$notifications,
    {
      id,
      type: 'info',
      message: 'Configuration updated successfully.'
    }
  ])

  setTimeout(() => {
    const index = $notifications.findIndex(n => n.id === id)

    notifications.set([
      ...$notifications.slice(0, index),
      ...$notifications.slice(index + 1)
    ])
  }, 4000)
}
</script>

<div class="container">
  <form on:submit|preventDefault="{saveConfig}">
    <h2>TV</h2>

    <label class="block py-2">
      <span>TV directory</span>
      <input bind:value="{$config.tv_directory}" class="form-input mt-1 block w-full" placeholder="/mnt/media/TV Shows">
    </label>

    <h2 class="pt-8">Movies</h2>

    <label class="block py-2">
      <span>Movie directory</span>
      <input bind:value="{$config.movie_directory}" class="form-input mt-1 block w-full" placeholder="/mnt/media/Movies">
    </label>

    <label class="block py-2">
      <span>Movie quality</span>
      <select bind:value="{$config.movie_quality}" class="form-select mt-1 block w-full">
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
        <option value="2160p">2160p</option>
      </select>
    </label>

    <div class="py-2">
      <label class="flex items-center">
        <input bind:checked="{$config.fallback_movie_quality}" type="checkbox" class="form-checkbox">
        <span class="ml-2">If the above quality can't be found, use an alternate better/poorer quality</span>
      </label>
    </div>

    <div class="py-2">
      <label class="flex items-center">
        <input bind:checked="{$config.use_yify}" type="checkbox" class="form-checkbox">
        <span class="ml-2">Use Yify as a source for movies. It will be given priority during searching. Yify is known for small filesizes, but quality suffers.</span>
      </label>
    </div>

    <h2 class="pt-8">Transmission</h2>

    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 px-4 py-2">
        <label class="block">
          <span>Username</span>
          <input bind:value="{$config.transmission_username}" class="form-input mt-1 block w-full" placeholder="/mnt/media/Movies">
        </label>
      </div>

      <div class="w-full md:w-1/2 px-4 py-2">
        <label class="block">
          <span>Password</span>
          <input bind:value="{$config.transmission_pw}" class="form-input mt-1 block w-full" placeholder="/mnt/media/Movies">
        </label>
      </div>

      <div class="w-full md:w-1/2 px-4 py-2">
        <label class="block">
          <span>Host</span>
          <input bind:value="{$config.transmission_host}" class="form-input mt-1 block w-full" placeholder="localhost">
        </label>
      </div>

      <div class="w-full md:w-1/2 px-4 py-2">
        <label class="block">
          <span>Host</span>
          <input bind:value="{$config.transmission_port}" type="number" class="form-input mt-1 block w-full" placeholder="9091">
        </label>
      </div>
    </div>

    <h2 class="pt-8">Notifications</h2>

    <label class="block py-2">
      <span>Pushbullet token</span>
      <input bind:value="{$config.pushbullet_token}" class="form-input mt-1 block w-full">
    </label>

    <div class="py-2">
      <label class="flex items-center">
        <input bind:checked="{$config.notify_on_start}" type="checkbox" class="form-checkbox">
        <span class="ml-2">Send a notification when a download is started</span>
      </label>
    </div>

    <div class="py-2">
      <label class="flex items-center">
        <input bind:checked="{$config.notify_on_finish}" type="checkbox" class="form-checkbox">
        <span class="ml-2">Send a notification when a download is finished</span>
      </label>
    </div>

    <div class="text-right py-2">
      <button class="btn btn-primary text-xl" type="submit">Save</button>
    </div>
  </form>
</div>