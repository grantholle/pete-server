'use strict'

const { test, trait } = use('Test/Suite')('Config')
const Route = use('Route')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test(`can retrieve the config`, async ({ assert, client }) => {
  const { body } = await client.get(Route.url('config.index')).end()

  assert.property(body, 'tv_directory')
  assert.property(body, 'movie_directory')
  assert.property(body, 'transmission_username')
  assert.property(body, 'transmission_pw')
  assert.property(body, 'transmission_host')
  assert.property(body, 'transmission_port')
  assert.property(body, 'pushbullet_token')
  assert.property(body, 'notify_on_start')
  assert.property(body, 'notify_on_finish')
  assert.property(body, 'movie_quality')
  assert.property(body, 'use_yify')
  assert.property(body, 'fallback_movie_quality')
})
