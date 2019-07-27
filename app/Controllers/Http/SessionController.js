'use strict'

const MovieDb = require('moviedb-promise')
const Config = use('App/Models/Config')

class SessionController {
  async getRequestToken ({ request, response }) {
    if (!request.input('token', null)) {
      return response.status(422).json({
        message: `Missing API token`
      })
    }

    const config = await Config.last()
    config.tmdb_key = request.input('token')
    await config.save()

    const moviedb = new MovieDb(config.tmdb_key)
    const token = await moviedb.requestToken()

    return response.json({ token })
  }

  async getSession ({ request, response }) {
    const config = await Config.last()
    const moviedb = new MovieDb(config.tmdb_key)
    moviedb.token = {
      expires_at: null,
      request_token: request.input('requestToken')
    }

    config.tmdb_session = await moviedb.session()
    await config.save()

    return response.json({ session: config.tmdb_session })
  }
}

module.exports = SessionController
