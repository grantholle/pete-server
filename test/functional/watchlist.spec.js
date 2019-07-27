'use strict'

const Route = use('Route')
const Event = use('Event')
const Logger = use('Logger')
const { test, trait, before, after } = use('Test/Suite')('Watchlist')
const getMoviedb = require('../../app/lib/tmdb')
let moviedb
const Config = use('App/Models/Config')
const Download = use('App/Models/Download')
/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')
const tmdb_key = Env.get('TMDB_KEY', null)
const tmdb_session = Env.get('TMDB_SESSION', null)
const transmission_username = Env.get('TRANSMISSION_USERNAME', null)
const transmission_pw = Env.get('TRANSMISSION_PW', null)
const transmission_host = Env.get('TRANSMISSION_HOST', null)
const transmission_port = Env.get('TRANSMISSION_PORT', null)
const trans = require('../traits/clears-transmission')

Logger.level = 'debug'

trait('Test/ApiClient')
trait('DatabaseTransactions')
trait(trans)

before(async () => {
  Event.fake()

  await Config.create({
    tmdb_key,
    tmdb_session,
    transmission_username,
    transmission_pw,
    transmission_host,
    transmission_port,
    tv_directory: '/tmp/TV Shows',
    movie_directory: '/tmp/Movies',
  })

  moviedb = await getMoviedb()
})

after(async () => {
  const config = await Config.last()
  await config.delete()
  Event.restore()
})

test(`Can add and remove a movie to the watchlist`, async ({ assert, client, clearTransmission }) => {
  const id = 301528

  await client.post(Route.url('watchlist.update'))
    .send({
      media_type: 'movie',
      media_id: id,
      watchlist: true
    })
    .end()

  const { results } = await moviedb.accountMovieWatchlist()
  let existing = results.some(m => m.id === id);

  assert.isTrue(existing, `Movie gets added successfully`)

  await client.post(Route.url('watchlist.update'))
    .send({
      media_type: 'movie',
      media_id: id,
      watchlist: false
    })
    .end()

  const res = await moviedb.accountMovieWatchlist()
  existing = res.results.some(m => m.id === id);

  assert.isFalse(existing, `Movie gets removed successfully`)
  await clearTransmission()
}).timeout(30000)

test(`Can retrieve watchlist and get the torrents for them`, async ({ assert, client, clearTransmission }) => {
  const id = 181808

  await client.post(Route.url('watchlist.update'))
    .send({
      media_type: 'movie',
      media_id: id,
      watchlist: true
    })
    .end()

  const movieRes = await client.get(Route.url('watchlist.movies')).end()
  movieRes.assertStatus(200)

  const downloads = await Download.all()
  assert.equal(downloads.size(), 1)

  await clearTransmission()
}).timeout(30000)

test(`Can add and remove a tv show to the watchlist`, async ({ assert, client, clearTransmission }) => {
  const id = 87108
  await client.post(Route.url('watchlist.update'))
    .send({
      media_type: 'tv',
      media_id: id,
      watchlist: true
    })
    .end()

  const { results } = await moviedb.accountTvWatchlist()
  let existing = results.some(m => m.id === id);

  assert.isTrue(existing, `Show gets added successfully`)

  await client.post(Route.url('watchlist.update'))
    .send({
      media_type: 'tv',
      media_id: id,
      watchlist: false
    })
    .end()

  const res = await moviedb.accountTvWatchlist()
  existing = res.results.some(m => m.id === id);

  assert.isFalse(existing, `Show gets removed successfully`)

  await clearTransmission()
}).timeout(30000)

test(`Can retrieve tv watchlist and get the torrents for them`, async ({ assert, client, clearTransmission }) => {
  // Get the current watchlist and modify it to contain
  // only one show, reset it later
  let needToAdd = true
  const bobsBurgers = 32726
  const getExistingWatchlist = async () => {
    const { results } = await moviedb.accountTvWatchlist()

    return results.map(r => r.id)
  }
  const existingWatchlist = await getExistingWatchlist()

  for (const id of existingWatchlist) {
    if (id === bobsBurgers) {
      needToAdd = false
      continue
    }

    await moviedb.accountWatchlistUpdate({
      media_type: 'tv',
      media_id: id,
      watchlist: false
    })
  }

  // Add bob's burgers
  if (needToAdd) {
    await moviedb.accountWatchlistUpdate({
      media_type: 'tv',
      media_id: bobsBurgers,
      watchlist: true
    })
  }

  const res = await client.get(Route.url('watchlist.tv')).end()
  res.assertStatus(200)

  const downloads = await Download.all()
  assert.isTrue(downloads.size() > 0)

  // Remove bob's burgers
  if (needToAdd) {
    await moviedb.accountWatchlistUpdate({
      media_type: 'tv',
      media_id: bobsBurgers,
      watchlist: false
    })
  }

  // Re-add all the shows
  for (const id of existingWatchlist) {
    if (id === bobsBurgers) {
      continue
    }

    await moviedb.accountWatchlistUpdate({
      media_type: 'tv',
      media_id: id,
      watchlist: true
    })
  }

  await clearTransmission()
}).timeout(Infinity)
