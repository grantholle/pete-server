'use strict'

const { test, trait } = use('Test/Suite')('Shows')
/** @type {typeof import('../../app/Models/Show')} */
const Show = use('App/Models/Show')

trait('DatabaseTransactions')

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

test('can find a magnet for an episode', async ({ assert }) => {
  const show = await Show.create({
    tmdb_id: 32726,
    imdb_id: 1561755,
    name: `Bob's Burgers`,
    start_season: 9,
    start_episode: 20,
    quality: 'HDTV'
  })
  const results = await show.searchForSeason(9, 21)

  assert.isObject(results)
  assert.isTrue(Object.keys(results).length === 2)
}).timeout(100000)
