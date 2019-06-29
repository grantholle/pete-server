'use strict'

const { test, trait } = use('Test/Suite')('Search')
const Movie = use('App/Models/Movie')
const Config = use('App/Models/Config')
const Route = use('Route')

trait('Test/ApiClient')
trait('DatabaseTransactions')

const createMovie = () => Movie.create({
  name: 'Star Wars: The Last Jedi',
  year: 2017,
  tmdb_id: 181808,
  imdb_id: `tt2527336`
})

test('can search for a movie torrent when using yify', async ({ assert, client }) => {
  await createMovie()
  await Config.create({ use_yify: true })

  const res = await client.get(Route.url('movies.torrent', { id: 181808 })).end()
  res.assertStatus(200)
  assert.property(res.body, 'magnet', `response has magnet property`)
  assert.isTrue(res.body.magnet.includes('yts'))
}).timeout(10000)
