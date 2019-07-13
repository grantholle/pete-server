'use strict'

const { test, trait } = use('Test/Suite')('Movie')
/** @type {typeof import('../../app/Models/Movie')} */
const Movie = use('App/Models/Movie')
const Config = use('App/Models/Config')

trait('DatabaseTransactions')

test('magnet search method', async ({ assert }) => {
  await Config.create({ use_yify: true })
  const movie = await Movie.create({
    name: 'Star Wars: The Last Jedi',
    year: 2017,
    tmdb_id: 181808,
    imdb_id: `tt2527336`
  })

  const magnet = await movie.findMagnet()
  assert.isString(magnet)
  assert.isTrue(magnet.includes('yts'), 'the magnet includes the yify domain')
}).timeout(30000)

test('movie lookup function', async ({ assert }) => {
  const movie = new Movie()
  movie.tmdb_id = 181808

  const results = await movie.lookup()
  assert.isObject(results)
  assert.property(results, 'title')
  assert.property(results, 'release_date')
}).timeout(30000)

test('finds and adds a magnet', async ({ assert }) => {
  await Config.create({
    use_yify: true,
    movie_directory: '/tmp',
    transmission_username: 'a',
    transmission_pw: '111'
  })
  const movie = await Movie.create({
    name: 'Star Wars: The Last Jedi',
    year: 2017,
    tmdb_id: 181808,
    imdb_id: `tt2527336`
  })

  const magnet = await movie.findAndAddMagnet()
  assert.isString(magnet)
  assert.isTrue(movie.added, 'the movie has been flagged as added')
}).timeout(300000)
