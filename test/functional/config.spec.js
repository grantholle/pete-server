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

test(`can update the config`, async ({ assert, client }) => {
  const newConfig = {
    tv_directory: '/path/to/tv',
    movie_directory: '/path/to/movies',
    transmission_username: 'username',
    transmission_pw: 'password',
    transmission_host: '127.1.1.1',
    transmission_port: '8888',
    pushbullet_token: '12345',
    notify_on_start: false,
    notify_on_finish: false,
    movie_quality: '720p',
    use_yify: true,
    fallback_movie_quality: false,
  }

  await client.get(Route.url('config.index')).end()
  const { body } = await client.post(Route.url('config.update')).send(newConfig).end()

  assert.equal(body.tv_directory, newConfig.tv_directory)
  assert.equal(body.movie_directory, newConfig.movie_directory)
  assert.equal(body.transmission_username, newConfig.transmission_username)
  assert.equal(body.transmission_pw, newConfig.transmission_pw)
  assert.equal(body.transmission_host, newConfig.transmission_host)
  assert.equal(body.transmission_port, newConfig.transmission_port)
  assert.equal(body.pushbullet_token, newConfig.pushbullet_token)
  assert.equal(body.notify_on_start, newConfig.notify_on_start)
  assert.equal(body.notify_on_finish, newConfig.notify_on_finish)
  assert.equal(body.movie_quality, newConfig.movie_quality)
  assert.equal(body.use_yify, newConfig.use_yify)
  assert.equal(body.fallback_movie_quality, newConfig.fallback_movie_quality)
})
