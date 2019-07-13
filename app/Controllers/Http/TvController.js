'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const moviedb = require('../../lib/tmdb')
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
    const showInfo = await moviedb.tvInfo(params.id)

    return response.json(showInfo)
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
  async destroy ({ params, request, response }) {
    const show = await Show.findByOrFail('tmdb_id', params.id)

    await moviedb.accountWatchlistUpdate({ media_type: 'tv', media_id: show.tmdb_id, watchlist: false })

    await show.delete()

    return response.json({
      success: true
    })
  }
}

module.exports = TvController
