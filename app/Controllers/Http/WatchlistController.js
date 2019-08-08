'use strict'

const { tv, movies} = require('../../lib/watchlist')
const getMoviedb = require('../../lib/tmdb')
const notify = require('../../lib/notify')

class WatchlistController {
  /**
   * Remove or add an item to the tv/movie watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async update ({ response, request }) {
    const moviedb = await getMoviedb()
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
    movies().catch(err => {
      notify({
        type: 'error',
        message: err.message
      })
    })

    return response.json({})
  }

  /**
   * Processes shows from the tv watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async tv ({ response }) {
    tv().catch(err => {
      notify({
        type: 'error',
        message: err.message
      })
    })

    return response.json({})
  }
}

module.exports = WatchlistController
