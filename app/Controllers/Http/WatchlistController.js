'use strict'

const moviedb = require('../../tmdb')
const Movie = use('App/Models/Movie')

class WatchlistController {
  /**
   * Remove or add an item to the tv/movie watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async update ({ response, request }) {
    const res = await moviedb.accountWatchlistUpdate(request.only([
      'media_type',
      'media_id',
      'watchlist'
    ]))

    return response.json(res)
  }

  /**
   * Processes movies from the movie watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async movies ({ response }) {
    const { results } = await moviedb.accountMovieWatchlist()

    const magnets = results.map(async (m) => {
      // Create the movie entry
      const movie = await Movie.create({
        tmdb_id: m.id,
        name: m.title,
        year: Number(m.release_date.substring(0, 4))
      })

      // Remove the movie from the watchlist
      // since we have a record of it locally
      // Do it asynchronously
      moviedb.removeMovieFromWatchlist(m.id)

      return await movie.search()
    })

    return response.json({ magnets })
  }
}

module.exports = WatchlistController
