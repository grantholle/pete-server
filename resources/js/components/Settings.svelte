<script>
import { config, addNotification } from '../store'
import axios from 'axios'
let conf = {}

config.subscribe(value => {
  if (value) {
    conf = value
  }
})

const getQueryVariable = variable => {
  var query = window.location.search.substring(1)
  var vars = query.split("&")
  for (var i=0; i<vars.length; i++) {
    var pair = vars[i].split("=")
    if(pair[0] == variable){return pair[1]}
  }
  return(false)
}

let hasAuthorized = getQueryVariable('approved')
let requestToken = getQueryVariable('request_token')

const getRequestToken = async () => {
  if (conf.tmdb_key && conf.tmdb_key.length < 32) {
    return
  }

  addNotification({
    type: 'info',
    message: 'Generating request token...'
  })

  axios.post(`/api/v1/token`, { token: conf.tmdb_key })
  const { data } = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${conf.tmdb_key}`)

  addNotification({
    type: 'info',
    message: 'Token created successfully.'
  })

  window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${window.location.href}`
}

const getSessionId = async () => {
  addNotification({
    type: 'info',
    message: 'Generating session...'
  })

  const { data } = await axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${conf.tmdb_key}`, {
    request_token: requestToken
  })

  await axios.post(`/api/v1/session`, { session_id: data.session_id })

  addNotification({
    type: 'info',
    message: 'Session saved successfully.'
  })

  config.set({
    ...conf,
    tmdb_session: data.session_id
  })

  hasAuthorized = false
}

const saveConfig = async () => {
  await axios.post(`/api/v1/config`, conf)

  const id = (new Date()).getMilliseconds().toString()

  addNotification({
    type: 'info',
    message: 'Configuration updated successfully.'
  })
}

const installScript = async () => {
  await axios.post(`/api/v1/script`)
}
</script>

<div class="container">
  <form on:submit|preventDefault="{saveConfig}">
    <h2>TMDb</h2>

    <label class="block py-2">
      <span>API key</span>
      <input bind:value="{conf.tmdb_key}" class="form-input mt-1 block w-full">
      <div class="text-sm text-gray-600 py-2">See <a class="text-gray-300 underline" href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank">instructions</a> on how to create an api key.</div>
    </label>

    <div class="py-2">
    {#if conf.tmdb_key && conf.tmdb_session}
      <label class="block">
        <span>Session ID</span>
        <input bind:value="{conf.tmdb_session}" disabled class="form-input mt-1 block w-full">
      </label>
    {:else if hasAuthorized}
      <div class="text-sm text-gray-300 py-2">Authorized successfully, you're now able to get the session.</div>
      <button class="btn btn-primary" on:click|preventDefault="{getSessionId}">Get session</button>
    {:else if conf.tmdb_key && !conf.tmdb_session}
      <div class="text-sm text-gray-300 py-2">After authorizing the app you've created, return to this tab without closing to get the session for your key.</div>
      <button class="btn btn-primary" on:click|preventDefault="{getRequestToken}">Authorize Pete</button>
    {/if}
    </div>

    <h2 class="pt-8">TV</h2>

    <label class="block py-2">
      <span>TV directory</span>
      <input bind:value="{conf.tv_directory}" class="form-input mt-1 block w-full" placeholder="/mnt/media/TV Shows">
    </label>

    <h2 class="pt-8">Movies</h2>

    <label class="block py-2">
      <span>Movie directory</span>
      <input bind:value="{conf.movie_directory}" class="form-input mt-1 block w-full" placeholder="/mnt/media/Movies">
    </label>

    <label class="block py-2">
      <span>Movie quality</span>
      <select bind:value="{conf.movie_quality}" class="form-select mt-1 block w-full">
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
        <option value="2160p">2160p</option>
      </select>
    </label>

    <div class="py-2">
      <label class="flex items-center">
        <input bind:checked="{conf.fallback_movie_quality}" type="checkbox" class="form-checkbox">
        <span class="ml-2">If the above quality can't be found, use an alternate better/poorer quality</span>
      </label>
    </div>

    <div class="py-2">
      <label class="flex items-center">
        <input bind:checked="{conf.use_yify}" type="checkbox" class="form-checkbox">
        <span class="ml-2">Give Yify priority when searching for movies.</span>
      </label>
    </div>

    <h2 class="pt-8 flex justify-between items-center">
      <div>
        Transmission
      </div>

      <button
        class="btn btn-primary text-base" type="button"
        on:click|preventDefault="{installScript}"
      >
        Install script
      </button>
    </h2>

    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 px-4 py-2">
        <label class="block">
          <span>Username</span>
          <input bind:value="{conf.transmission_username}" class="form-input mt-1 block w-full" placeholder="/mnt/media/Movies">
        </label>
      </div>

      <div class="w-full md:w-1/2 px-4 py-2">
        <label class="block">
          <span>Password</span>
          <input bind:value="{conf.transmission_pw}" class="form-input mt-1 block w-full" placeholder="/mnt/media/Movies">
        </label>
      </div>

      <div class="w-full md:w-1/2 px-4 py-2">
        <label class="block">
          <span>Host</span>
          <input bind:value="{conf.transmission_host}" class="form-input mt-1 block w-full" placeholder="localhost">
        </label>
      </div>

      <div class="w-full md:w-1/2 px-4 py-2">
        <label class="block">
          <span>Host</span>
          <input bind:value="{conf.transmission_port}" type="number" class="form-input mt-1 block w-full" placeholder="9091">
        </label>
      </div>
    </div>

    <h2 class="pt-8">Notifications</h2>

    <label class="block py-2">
      <span>Pushbullet token</span>
      <input bind:value="{conf.pushbullet_token}" class="form-input mt-1 block w-full">
    </label>

    <div class="py-2">
      <label class="flex items-center">
        <input bind:checked="{conf.notify_on_start}" type="checkbox" class="form-checkbox">
        <span class="ml-2">Send a notification when a download is started</span>
      </label>
    </div>

    <div class="py-2">
      <label class="flex items-center">
        <input bind:checked="{conf.notify_on_finish}" type="checkbox" class="form-checkbox">
        <span class="ml-2">Send a notification when a download is finished</span>
      </label>
    </div>

    <div class="text-right py-2">
      <button class="btn btn-primary text-xl" type="submit">Save</button>
    </div>
  </form>
</div>