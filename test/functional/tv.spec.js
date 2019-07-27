'use strict'

const { test, trait, afterEach, before } = use('Test/Suite')('TV')
const Route = use('Route')
const Show = use('App/Models/Show')
const isArray = require('lodash/isArray')
const getMoviedb = require('../../app/lib/tmdb')
let moviedb
let removeShow = false
const tmdb_id = 87108
const Config = use('App/Models/Config')
/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

const tmdb_key = Env.get('TMDB_KEY', null)
const tmdb_session = Env.get('TMDB_SESSION', null)

trait('Test/ApiClient')
trait('DatabaseTransactions')

before(async () => {
  await Config.create({
    tmdb_key,
    tmdb_session
  })

  moviedb = await getMoviedb()
})

const createShow = async () => {
  const show = await Show.findBy('tmdb_id', tmdb_id)

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
  assert.equal(show.tmdb_id, tmdb_id, 'has matching tmdb id')
  assert.equal(show.start_season, 1, 'has matching start season')
  assert.equal(show.start_episode, 1, 'has matching start episode')
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

  const show = await Show.findBy('tmdb_id', tmdb_id)

  response.assertStatus(200)
  assert.equal(show.start_season, 2, `the start season was updated`)
  assert.equal(show.start_episode, 5, `the start episode was updated`)
  assert.equal(show.quality, '1080p', `the quality was updated`)
  assert.equal(show.use_alt_quality, false, `the alt quality flag was updated`)
}).timeout(30000)

test('able to remove show', async ({ assert, client }) => {
  await createShow()
  await moviedb.accountWatchlistUpdate({ media_type: 'tv', media_id: tmdb_id, watchlist: true })
  let show = await Show.findBy('tmdb_id', tmdb_id)

  assert.isNotNull(show, `the the show exsits in the db`)

  const response = await client.delete(Route.url('tv.destroy', { id: tmdb_id })).end()

  show = await Show.findBy('tmdb_id', tmdb_id)
  const { results } = await moviedb.accountTvWatchlist()
  const existing = results.some(s => s.id === tmdb_id)

  response.assertStatus(200)
  assert.isFalse(existing, `the show is not on the watchlist`)
  assert.isNull(show, `the show doesn't exist in the database`)
}).timeout(30000)

test('able to get tmdb details', async ({ assert, client }) => {
  const response = await client.get(Route.url('tv.tmdb', { id: tmdb_id })).end()

  response.assertStatus(200)
  assert.isObject(response.body, `the details are an object`)
  assert.equal(response.body.name, 'Chernobyl', `the show name is valid`)
  assert.property(response.body, 'seasons', `the show has a valid season property`)
}).timeout(30000)
