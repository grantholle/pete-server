'use strict'

const { test, trait, afterEach } = use('Test/Suite')('Tmdb Tv')
const Route = use('Route')
const Show = use('App/Models/Show')
const isArray = require('lodash/isArray')
const moviedb = require('../../app/tmdb')
let removeShow = false
const tmdb_id = 87108

trait('Test/ApiClient')
trait('DatabaseTransactions')

const createShow = async () => {
  const show = await Show.find(tmdb_id)

  if (show) {
    return show
  }

  return Show.create({
    tmdb_id,
    name: 'Chernobyl',
    start_season: 1,
    start_episode: 1
  })
}

afterEach(async () => {
  if (removeShow) {
    try {
      await moviedb.accountWatchlistUpdate({ media_type: 'tv', media_id: tmdb_id, watchlist: false })
    } catch (e) { }

    removeShow = false
  }
})

test('able to retrieve TV watchlist', async ({ assert, client }) => {
  const { body } = await client.get(Route.url('tv.index')).end()

  assert.isTrue(isArray(body), 'response is an array')
}).timeout(10000)

test('able to add a new show to TV watchlist', async ({ assert, client }) => {
  removeShow = true

  const response = await client.post(Route.url('tv.store'))
    .send({
      tmdb_id,
      name: 'Chernobyl',
      start_season: 1,
      start_episode: 1
    })
    .end()

  response.assertStatus(200)

  // The show is in the watchlist
  const { results } = await moviedb.accountTvWatchlist()
  const existing = results.some(s => s.id === tmdb_id)

  assert.isTrue(existing, 'show exsits in watchlist')

  // Show is in the database
  const show = await Show.findBy('tmdb_id', tmdb_id)
  assert.isTrue(show.tmdb_id === tmdb_id, 'has matching tmdb id')
  assert.isTrue(show.start_season === 1, 'has matching start season')
  assert.isTrue(show.start_episode === 1, 'has matching start episode')
}).timeout(30000)

test('able to fetch show details', async ({ assert, client }) => {
  await createShow()
  const response = await client.get(Route.url('tv.show', { id: tmdb_id })).end()

  response.assertStatus(200)
  assert.equal(response.body.name, 'Chernobyl', `the name matches`)
  assert.equal(response.body.start_season, 1, `the start season matches`)
  assert.equal(response.body.start_episode, 1, `the start episode matches`)
}).timeout(30000)

test('able to update show details', async ({ assert, client }) => {
  await createShow()

  const response = await client.put(Route.url('tv.update', { id: tmdb_id }))
    .send({
      start_season: 2,
      start_episode: 5,
      quality: '1080p',
      use_alt_quality: false
    })
    .end()

  const show = await Show.find(tmdb_id)

  response.assertStatus(200)
  assert.equal(show.start_season, 2, `the start season was updated`)
  assert.equal(show.start_episode, 5, `the start episode was updated`)
  assert.equal(show.quality, '1080p', `the quality was updated`)
  assert.equal(show.use_alt_quality, false, `the alt quality flag was updated`)
}).timeout(30000)

test('able to remove show', async ({ assert, client }) => {
  await createShow()
  await moviedb.accountWatchlistUpdate({ media_type: 'tv', media_id: tmdb_id, watchlist: true })
  let show = await Show.find(tmdb_id)

  assert.isNotNull(show, `the the show exsits in the db`)

  const response = await client.delete(Route.url('tv.destroy', { id: tmdb_id })).end()

  show = await Show.find(tmdb_id)
  const { results } = await moviedb.accountTvWatchlist()
  const existing = results.some(s => s.id === tmdb_id)

  response.assertStatus(200)
  assert.isFalse(existing, `the show is not on the watchlist`)
  assert.isNull(show, `the show doesn't exist in the database`)
}).timeout(30000)
