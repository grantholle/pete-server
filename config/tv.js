'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  quality: Env.get('TV_QUALITY', 'HDTV'),
  altQuality: Env.get('TV_ALT_QUALITY', true),
  location: Env.get('TV_LOCATION', null)
}
