'use strict'

const getMoviedb = require('../../lib/tmdb')
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
    const moviedb = await getMoviedb()
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
    const moviedb = await getMoviedb()
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
    const moviedb = await getMoviedb()
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
    const moviedb = await getMoviedb()

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
  async torrent ({ params, request, response }) {
    let movie = await Movie.find('tmdb_id', params.id)

    // Be forgiving when looking up movies
    // If it doesn't exist, create it on the fly
    if (!movie) {
      movie = new Movie()
      movie.tmdb_id = params.id

      await movie.fetchAndFill()
      await movie.save()
    }

    const magnet = await movie.findMagnet()

    if (request.input('add', false)) {
      await movie.addMagnet(magnet)
    }

    return response.json({ magnet })
  }
}

module.exports = MovieController
