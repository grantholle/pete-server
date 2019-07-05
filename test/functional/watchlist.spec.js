'use strict'

const Route = use('Route')
const { test, trait } = use('Test/Suite')('Watchlist')
const moviedb = require('../../app/tmdb')
const { isArray } = require('lodash')
const Config = use('App/Models/Config')

trait('Test/ApiClient')
trait('DatabaseTransactions')

// test(`Can add and remove a movie to the watchlist`, async ({ assert, client }) => {
//   const id = 301528

//   await client.post(Route.url('watchlist.update'))
//     .send({
//       media_type: 'movie',
//       media_id: id,
//       watchlist: true
//     })
//     .end()

//   const { results } = await moviedb.accountMovieWatchlist()
//   let existing = results.some(m => m.id === id);

//   assert.isTrue(existing, `Movie gets added successfully`)

//   await client.post(Route.url('watchlist.update'))
//     .send({
//       media_type: 'movie',
//       media_id: id,
//       watchlist: false
//     })
//     .end()

//   const res = await moviedb.accountMovieWatchlist()
//   existing = res.results.some(m => m.id === id);

//   assert.isFalse(existing, `Movie gets removed successfully`)
// }).timeout(30000)

// test(`Can retrieve watchlist and get the torrents for them`, async ({ assert, client }) => {
//   const id = 181808
//   await Config.create({ use_yify: true })

//   await client.post(Route.url('watchlist.update'))
//     .send({
//       media_type: 'movie',
//       media_id: id,
//       watchlist: true
//     })
//     .end()

//   const movieRes = await client.get(Route.url('watchlist.movies')).end()
//   movieRes.assertStatus(200)
//   assert.property(movieRes.body, 'magnets', 'Has magents property')
//   assert.isTrue(isArray(movieRes.body.magnets))
//   assert.isTrue(movieRes.body.magnets.length === 1)
// }).timeout(30000)

// test(`Can add and remove a tv show to the watchlist`, async ({ assert, client }) => {
//   const id = 87108
//   await client.post(Route.url('watchlist.update'))
//     .send({
//       media_type: 'tv',
//       media_id: id,
//       watchlist: true
//     })
//     .end()

//   const { results } = await moviedb.accountTvWatchlist()
//   let existing = results.some(m => m.id === id);

//   assert.isTrue(existing, `Show gets added successfully`)

//   await client.post(Route.url('watchlist.update'))
//     .send({
//       media_type: 'tv',
//       media_id: id,
//       watchlist: false
//     })
//     .end()

//   const res = await moviedb.accountTvWatchlist()
//   existing = res.results.some(m => m.id === id);

//   assert.isFalse(existing, `Show gets removed successfully`)
// }).timeout(30000)

test(`Can retrieve tv watchlist and get the torrents for them`, async ({ assert, client }) => {
  // Get the current watchlist and modify it to contain
  // only one show, reset it later
  // const getExistingWatchlist = async () => {
  //   const { results } = await moviedb.accountTvWatchlist()

  //   return results.map(r => r.id)
  // }
  // const existingWatchlist = await getExistingWatchlist()
  // console.log('existing watchlist', existingWatchlist)

  // for (const id of existingWatchlist) {
  //   await moviedb.accountWatchlistUpdate({
  //     media_type: 'tv',
  //     media_id: id,
  //     watchlist: false
  //   })
  // }

  await Config.create()

  // Add bob's burgers
  // await moviedb.accountWatchlistUpdate({
  //   media_type: 'tv',
  //   media_id: 32726,
  //   watchlist: true
  // })

  const res = await client.get(Route.url('watchlist.tv')).end()
  res.assertStatus(200)

  // Remove bob's burgers
  // await moviedb.accountWatchlistUpdate({
  //   media_type: 'tv',
  //   media_id: 32726,
  //   watchlist: false
  // })

  // for (const id of existingWatchlist) {
  //   await moviedb.accountWatchlistUpdate({
  //     media_type: 'tv',
  //     media_id: id,
  //     watchlist: true
  //   })
  // }
}).timeout(Infinity)