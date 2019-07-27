'use strict'

const { test, trait, afterEach, before } = use('Test/Suite')('Movies')
const Route = use('Route')
const getTmdb = require('../../app/lib/tmdb')
let moviedb = null
let removeMovie = false
const tmdb_id = 458156
const Movie = use('App/Models/Movie')
const Config = use('App/Models/Config')
/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

const tmdb_key = Env.get('TMDB_KEY', null)
const tmdb_session = Env.get('TMDB_SESSION', null)

trait('Test/ApiClient')
trait('DatabaseTransactions')

const createMovie = async () => {
  const movie = await Movie.find(tmdb_id)

  if (movie) {
    return movie
  }

  return Movie.create({
    tmdb_id,
    name: 'John Wick: Chapter 3 – Parabellum'
  })
}

before(async () => {
  await Config.create({
    tmdb_key,
    tmdb_session
  })

  moviedb = await getTmdb()
})

afterEach(async () => {
  if (removeMovie) {
    try {
      await moviedb.removeMovieFromWatchlist(tmdb_id)
    } catch (e) { }

    removeMovie = false
  }
})

test('able to retrieve movie watchlist', async ({ assert, client }) => {
  const { body } = await client.get(Route.url('movies.index')).end()

  assert.isArray(body, 'response is an array')
}).timeout(10000)

test('able to add a new show to movie watchlist', async ({ assert, client }) => {
  removeMovie = true

  const response = await client.post(Route.url('movies.store'))
    .send({
      tmdb_id,
      name: 'John Wick: Chapter 3 – Parabellum',
      imdb_id: `tt6146586`
    })
    .end()

  response.assertStatus(200)

  // The show is in the watchlist
  const { results } = await moviedb.accountMovieWatchlist()
  const existing = results.some(s => s.id === tmdb_id)

  assert.isTrue(existing, 'movie exsits in watchlist')

  // Movie is in the database
  const movie = await Movie.findBy('tmdb_id', tmdb_id)
  assert.equal(movie.tmdb_id, tmdb_id, 'has matching tmdb id')
  assert.equal(movie.imdb_id, `tt6146586`, 'has matching imdb id')
  assert.equal(movie.added, false, 'has matching added flag')
  assert.equal(movie.attempts, 0, 'has matching attempts')
}).timeout(30000)

test('able to fetch movie details', async ({ assert, client }) => {
  await createMovie()
  const response = await client.get(Route.url('movies.show', { id: tmdb_id })).end()

  response.assertStatus(200)
  assert.equal(response.body.name, 'John Wick: Chapter 3 – Parabellum', `the name matches`)
  assert.equal(response.body.attempts, 0, `attempts is zero`)
  assert.equal(response.body.added, false, `it hasn't been added`)
  assert.equal(typeof response.body.id, 'number', `it has an id`)
}).timeout(30000)

test('able to update movie details', async ({ assert, client }) => {
  await createMovie()

  const response = await client.put(Route.url('movies.update', { id: tmdb_id }))
    .send({ added: true }).end()

  const movie = await Movie.find(tmdb_id)

  response.assertStatus(200)
  assert.equal(movie.name, 'John Wick: Chapter 3 – Parabellum', `the name matches`)
  assert.equal(movie.added, true, `the movie is added`)
}).timeout(30000)

test('able to remove movie', async ({ assert, client }) => {
  await createMovie()
  await moviedb.accountWatchlistUpdate({ media_type: 'movie', media_id: tmdb_id, watchlist: true })
  let movie = await Movie.find(tmdb_id)

  assert.isNotNull(movie, `the the movie exsits in the db`)

  const response = await client.delete(Route.url('movies.destroy', { id: tmdb_id })).end()

  movie = await Movie.find(tmdb_id)
  const { results } = await moviedb.accountTvWatchlist()
  const existing = results.some(s => s.id === tmdb_id)

  response.assertStatus(200)
  assert.isFalse(existing, `the movie is not on the watchlist`)
  assert.isNull(movie, `the movie doesn't exist in the database`)
}).timeout(30000)

test('able to get tmdb details', async ({ assert, client }) => {
  const response = await client.get(Route.url('movies.tmdb', { id: tmdb_id })).end()

  response.assertStatus(200)
  assert.isObject(response.body, `the details are an object`)
  assert.equal(response.body.title, 'John Wick: Chapter 3 – Parabellum', `the movie title is valid`)
  assert.equal(response.body.imdb_id, 'tt6146586', `the imdb matches`)
  assert.property(response.body, 'release_date', `the movie has a valid release date property`)
}).timeout(30000)
