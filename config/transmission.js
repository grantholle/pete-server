'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  user: Env.get('TRANSMISSION_USER', null),
  pw: Env.get('TRANSMISSION_PW', ''),
  host: Env.get('TRANSMISSION_HOST', 'localhost'),
  port: Env.get('TRANSMISSION_PORT', 9091)
}
