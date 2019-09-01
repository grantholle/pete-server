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

    return response.json({ success: true })
  }

  async getSession ({ request, response }) {
    const config = await Config.last()
    config.tmdb_session = request.input('session_id')
    await config.save()

    return response.json({ success: true })
  }
}

module.exports = SessionController
