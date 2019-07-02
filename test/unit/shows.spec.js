'use strict'

const { test, trait } = use('Test/Suite')('Shows')
const Show = use('App/Models/Show')
const Episode = use('App/Models/Episode')

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
