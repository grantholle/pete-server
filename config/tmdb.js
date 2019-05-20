'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  apiKey: Env.get('TMDB_KEY', null),
  sessionId: Env.get('TMDB_SESSION', null)
}
