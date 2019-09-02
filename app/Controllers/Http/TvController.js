'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const getMoviedb = require('../../lib/tmdb')
/** @type {typeof import('../../Models/Show')} */
const Show = use('App/Models/Show')
const Logger = use('Logger')

/**
 * Resourceful controller for interacting with TV watchlist
 */
class TvController {
  /**
   * Fetch the user's watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async index ({ response }) {
    const moviedb = await getMoviedb()
    const { results } = await moviedb.accountTvWatchlist()

    return response.json(results)
  }

  /**
   * Saves a show in the watchlist and
   * show configuration in the db
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const moviedb = await getMoviedb()
    const media_id = request.input('tmdb_id')

    // Add show to watchlist
    await moviedb.accountWatchlistUpdate({
      media_id,
      media_type: 'tv',
      watchlist: true
    })

    const show = await Show.findOrNew({ 'tmdb_id': media_id })
    show.merge(request.only([
      `start_season`,
      `start_episode`,
      `name`
    ]))

    try {
      await show.save()
    } catch (e) {
      Logger.error(e)
    }

    return response.json(show)
  }

  /**
   * Display a single show.
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async show ({ params, response }) {
    const show = await Show.findByOrFail('tmdb_id', params.id)

    return response.json(show)
  }

  /**
   * Get show details from tmdb
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async tmdb ({ params, response }) {
    const moviedb = await getMoviedb()
    const showInfo = await moviedb.tvInfo(params.id)

    return response.json(showInfo)
  }

  /**
   * Creates a show from tmdb
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async tmdbCreate ({ params, response }) {
    const show = new Show()
    show.tmdb_id = params.id
    await show.fetchAndFill()
    await show.save()
    await show.reload()

    return response.json(show)
  }

  /**
   * Update show details
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const show = await Show.findByOrFail('tmdb_id', params.id)

    show.merge(request.only([
      `start_season`,
      `start_episode`,
      `quality`,
      `use_alt_quality`
    ]))

    await show.save()

    return response.json(show)
  }

  /**
   * Deletes a show from the db and removes from the watchlist
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const show = await Show.findByOrFail('tmdb_id', params.id)
    const moviedb = await getMoviedb()

    await moviedb.accountWatchlistUpdate({ media_type: 'tv', media_id: show.tmdb_id, watchlist: false })

    await show.delete()

    return response.json({
      success: true
    })
  }

  /**
   * Gets a season's worth of episodes
   * starting at a specified episode
   *
   * @param {object} ctx
   * @param {object} ctx.params
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async fetchSeason ({ params, request, response }) {
    const show = await Show.findByOrFail('tmdb_id', params.id)
    const season = request.input('season', show.start_season)
    const start = request.input('start', show.start_episode)
    const force = request.input('force', false)
    const single = request.input('single', false)
    show.quality = request.input('quality', show.quality)
    await show.save()

    // Run async/background
    show.searchForSeason(season, start, force, single)

    return response.json({ success: true })
  }
}

module.exports = TvController
