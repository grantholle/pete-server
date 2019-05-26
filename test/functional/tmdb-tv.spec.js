'use strict'

const { test, trait } = use('Test/Suite')('Tmdb Tv')
const Route = use('Route')
const isArray = require('lodash/isArray')

trait('Test/ApiClient')

test('able to retrieve TV watchlist', async ({ assert, client }) => {
  const { body } = await client.get(Route.url('tmdb/tv.index')).end()

  assert.isTrue(isArray(body), 'response is an array')
}).timeout(10000)
