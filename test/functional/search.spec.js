'use strict'

const { test, trait, before } = use('Test/Suite')('Search')
const Movie = use('App/Models/Movie')
const Config = use('App/Models/Config')
const Route = use('Route')
/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

const tmdb_key = Env.get('TMDB_KEY', null)
const tmdb_session = Env.get('TMDB_SESSION', null)

trait('Test/ApiClient')
trait('DatabaseTransactions')

before(async () => {
  await Config.create({
    use_yify: true,
    tmdb_key,
    tmdb_session,
  })
})

const createMovie = () => Movie.create({
  name: 'Star Wars: The Last Jedi',
  year: 2017,
  tmdb_id: 181808,
  imdb_id: `tt2527336`
})

test('can search for a movie torrent when using yify', async ({ assert, client }) => {
  await createMovie()

  const res = await client.get(Route.url('movies.torrent', { id: 181808 })).end()
  res.assertStatus(200)
  assert.property(res.body, 'magnet', `response has magnet property`)
  assert.isTrue(res.body.magnet.includes('yts'), 'the magnet includes the yify domain')
}).timeout(10000)

test('can search for a movie torrent when not using yify', async ({ assert, client }) => {
  await createMovie()
  const config = await Config.last()
  config.use_yify = false
  await config.save()

  const res = await client.get(Route.url('movies.torrent', { id: 181808 })).end()
  res.assertStatus(200)
  assert.property(res.body, 'magnet', `response has magnet property`)
  assert.isFalse(res.body.magnet.includes('yts'))
}).timeout(10000)
