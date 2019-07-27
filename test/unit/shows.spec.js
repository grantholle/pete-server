'use strict'

const { test, trait, before, after } = use('Test/Suite')('Shows')
/** @type {typeof import('../../app/Models/Show')} */
const Show = use('App/Models/Show')
/** @type {typeof import('../../app/Models/Config')} */
const Config = use('App/Models/Config')
/** @type {typeof import('../../app/Models/Download')} */
const Download = use('App/Models/Download')
/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')
const Event = use('Event')
const Logger = use('Logger')
const trans = require('../traits/clears-transmission')

Logger.level = 'debug'

const tmdb_key = Env.get('TMDB_KEY', null)
const tmdb_session = Env.get('TMDB_SESSION', null)
const transmission_username = Env.get('TRANSMISSION_USERNAME', null)
const transmission_pw = Env.get('TRANSMISSION_PW', null)
const transmission_host = Env.get('TRANSMISSION_HOST', null)
const transmission_port = Env.get('TRANSMISSION_PORT', null)

trait('DatabaseTransactions')
trait(trans)

before(() => Event.fake())
after(async () => Event.restore())

const originalEpisodes = [
  {
    "episode": 1,
    "name": "1:23:45",
    "season": 1,
  },
  {
    "episode": 2,
    "name": "Please Remain Calm",
    "season": 1,
  },
  {
    "episode": 3,
    "name": "Open Wide, O Earth",
    "season": 1,
  },
  {
    "episode": 4,
    "name": "The Happiness of All Mankind",
    "season": 1,
  },
  {
    "episode": 5,
    "name": "Vichnaya Pamyat",
    "season": 1,
  }
]

test('can populate from a tmdb id', async ({ assert }) => {
  const show = new Show()
  show.tmdb_id = 1412
  await show.fetchAndFill()
  await show.save()

  const savedShow = await Show.findBy('tmdb_id', 1412)
  assert.isTrue(savedShow.name === 'Arrow')
  assert.isTrue(savedShow.start_season === 7)
}).timeout(30000)

test('make sure show relationships work', async ({ assert }) => {
  const show = await Show.create({
    tmdb_id: 87108,
    name: 'Chernobyl',
    start_season: 1,
    start_episode: 1
  })

  const e = await show.episodes().createMany(originalEpisodes)

  const createdShow = await Show.findBy('tmdb_id', 87108)
  const episodes = await createdShow.episodes().fetch()

  assert.isTrue(episodes.size() === 5)
}).timeout(30000)

test('ensure rarbg search function works', async ({ assert }) => {
  const show = await Show.create({
    tmdb_id: 32726,
    imdb_id: 1561755,
    name: `Bob's Burgers`,
    start_season: 9,
    start_episode: 20
  })
  await show.getEpisodesForSeason(9)
  const episodes = await show.episodes().fetch()
  const firstEpisode = episodes.first()

  const result = await firstEpisode.searchRarbg(show, 'HDTV')
  assert.isString(result, 'the result is a string')
  assert.isTrue(result.startsWith(`magnet:?`), `the result is a valid magnet`)
}).timeout(100000)

test('ensure eztv search function works', async ({ assert }) => {
  const show = await Show.create({
    tmdb_id: 32726,
    imdb_id: 1561755,
    name: `Bob's Burgers`,
    start_season: 9,
    start_episode: 20
  })
  await show.getEpisodesForSeason(9)
  const episodes = await show.episodes().fetch()
  const firstEpisode = episodes.first()
  const lastEpisode = episodes.last()

  const firstResult = await firstEpisode.searchEztv(show, 'HDTV')
  assert.isString(firstResult, 'the result is a string')
  assert.isTrue(firstResult.startsWith(`magnet:?`), `the result is a valid magnet`)
  assert.isTrue(show.eztvCache.length > 0, 'the eztv cache is populated')

  const lastResult = await lastEpisode.searchEztv(show, 'HDTV')
  assert.isString(lastResult, 'the result is a string')
  assert.isTrue(lastResult.startsWith(`magnet:?`), `the result is a valid magnet`)
}).timeout(100000)

test('can find a magnet for episodes and get added to transmission', async ({ assert, clearTransmission }) => {
  await Config.create({
    tmdb_key,
    tmdb_session,
    transmission_username,
    transmission_pw,
    transmission_host,
    transmission_port,
    tv_directory: `/tmp/TV Shows`,
  })
  const show = await Show.create({
    tmdb_id: 32726,
    imdb_id: 1561755,
    name: `Bob's Burgers`,
    start_season: 9,
    start_episode: 20,
    quality: 'HDTV'
  })

  await show.searchForSeason(9, 21)
  const downloads = await Download.all()

  assert.equal(downloads.size(), 2)
  await clearTransmission()
}).timeout(100000)


