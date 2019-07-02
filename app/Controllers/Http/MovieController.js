'use strict'

const moviedb = require('../../tmdb')
const Movie = use(`App/Models/Movie`)
const Logger = use('Logger')

class MovieController {
  /**
   * Fetch the user's watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async index ({ response }) {
    const { results } = await moviedb.accountMovieWatchlist()

    return response.json(results)
  }

  /**
   * Saves a movie in the watchlist and
   * movie configuration in the db
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const media_id = request.input('tmdb_id')

    // Add movie to watchlist
    await moviedb.accountWatchlistUpdate({
      media_id,
      media_type: 'movie',
      watchlist: true
    })

    const movie = await Movie.findOrNew({ 'tmdb_id': media_id })
    movie.merge(request.only([`name`, `imdb_id`]))

    try {
      await movie.save()
      // await movie.reload()
    } catch (e) {
      Logger.error(e)
    }

    return response.json(movie)
  }

  /**
   * Display a single movie.
   *
   * @param {object} ctx
   * @param {Params} ctx.params
   * @param {Response} ctx.response
   */
  async show ({ params, response }) {
    const movie = await Movie.findOrFail(params.id)

    return response.json(movie)
  }

  /**
   * Get movie details from tmdb
   *
   * @param {object} ctx
   * @param {Params} ctx.params
   * @param {Response} ctx.response
   */
  async tmdb ({ params, response }) {
    const movieInfo = await moviedb.movieInfo(params.id)

    return response.json(movieInfo)
  }

  /**
   * Update movie details
   *
   * @param {object} ctx
   * @param {Params} ctx.params
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const movie = await Movie.findOrFail(params.id)

    movie.merge(request.only([
      `added`,
      `attempts`
    ]))

    await movie.save()

    return response.json(movie)
  }

  /**
   * Deletes a movie from the db and removes from the watchlist
   *
   * @param {object} ctx
   * @param {Params} ctx.params
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const movie = await Movie.findOrFail(params.id)

    await moviedb.removeMovieFromWatchlist(movie.tmdb_id)

    await movie.delete()

    return response.json({
      success: true
    })
  }

  /**
   * Searches for a movie torrent
   *
   * @param {object} ctx
   * @param {Params} ctx.params
   * @param {Response} ctx.response
   */
  async torrent ({ params, response }) {
    const movie = await Movie.findByOrFail('tmdb_id', params.id)
    const magnet = await movie.search(movie)

    return response.json({ magnet })
  }
}

module.exports = MovieController
