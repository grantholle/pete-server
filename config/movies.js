'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  quality: Env.get('MOVIE_QUALITY', '1080p'),
  useYify: Env.get('USE_YIFY', false),
  fallback: Env.get('MOVIE_QUALITY_FALLBACK', true),
  location: Env.get('MOVIE_LOCATION', null)
}
