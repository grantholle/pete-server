'use strict'

const { test, trait } = use('Test/Suite')('Movie')
/** @type {typeof import('../../app/Models/Movie')} */
const Movie = use('App/Models/Movie')
/** @type {typeof import('../../app/Models/Download')} */
const Download = use('App/Models/Download')
const Config = use('App/Models/Config')
const Logger = use('Logger')
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

trait('DatabaseTransactions')
trait(trans)

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
  await Config.create({
    tmdb_key,
    tmdb_session
  })

  const movie = new Movie()
  movie.tmdb_id = 181808

  const results = await movie.lookup()
  assert.isObject(results)
  assert.property(results, 'title')
  assert.property(results, 'release_date')
}).timeout(30000)

test('yify search method', async ({ assert }) => {
  const movie = new Movie({
    name: 'Star Wars: The Last Jedi',
    year: 2017,
    tmdb_id: 181808,
    imdb_id: `tt2527336`
  })

  const magnet = await movie.searchYify('1080p')
  assert.isString(magnet)
  assert.isTrue(magnet.includes('yts'))
}).timeout(10000)

test('finds and adds a magnet', async ({ assert, clearTransmission }) => {
  await Config.create({
    use_yify: true,
    movie_directory: '/tmp',
    tmdb_key,
    tmdb_session,
    transmission_username,
    transmission_pw,
    transmission_host,
    transmission_port,
  })
  const movie = await Movie.create({
    name: 'Star Wars: The Last Jedi',
    year: 2017,
    tmdb_id: 181808,
    imdb_id: `tt2527336`
  })

  const magnet = await movie.findAndAddMagnet()
  const downloads = await Download.all()

  assert.isString(magnet)
  assert.isTrue(movie.added, 'the movie has been flagged as added')
  assert.equal(downloads.size(), 1)

  await clearTransmission()
}).timeout(300000)
