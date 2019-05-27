'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const moviedb = require('../../tmdb')
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
   * Display a single tmdbtv.
   * GET tmdbtvs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response }) {
  }

  /**
   * Render a form to update an existing tmdbtv.
   * GET tmdbtvs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async edit ({ params, request, response }) {
  }

  /**
   * Update tmdbtv details.
   * PUT or PATCH tmdbtvs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a tmdbtv with id.
   * DELETE tmdbtvs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TvController
