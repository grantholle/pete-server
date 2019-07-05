'use strict'

const { test, trait } = use('Test/Suite')('Shows')
const Show = use('App/Models/Show')
const Episode = use('App/Models/Episode')
const eztv = require('../../app/lib/eztv')
const { last } = require('lodash')

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

test('ensure eztv search function works', async ({ assert }) => {
  const show = await Show.create({
    tmdb_id: 32726,
    imdb_id: 1561755,
    name: `Bob's Burgers`,
    start_season: 9,
    start_episode: 20
  })
  await show.getEpisodesForSeason(9)
  let episodes = await show.episodes().fetch()
  episodes = episodes.toJSON()
  const episode = last(episodes)

  const result = await eztv(show, episode, 'HDTV')
  assert.isString(result, 'the result is a string')
  assert.isTrue(result.startsWith(`magnet:?`), `the result is a valid magnet`)
}).timeout(100000)

test('ensure tv season search function works', async ({ assert }) => {
  const show = await Show.create({
    tmdb_id: 32726,
    imdb_id: 1561755,
    name: `Bob's Burgers`,
    start_season: 9,
    start_episode: 20,
    quality: 'HDTV'
  })
  await show.searchForSeason(9, 22)

  // Fetch the downloads
  // const result = await eztv(show, episode, 'HDTV')
  // assert.isString(result, 'the result is a string')
  // assert.isTrue(result.startsWith(`magnet:?`), `the result is a valid magnet`)
}).timeout(100000)
