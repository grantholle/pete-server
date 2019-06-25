'use strict'

class SearchController {
  /**
   * Search for a movie
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async index ({ request, response }) {
    const { results } = await moviedb.accountMovieWatchlist()

    return response.json(results)
  }
}

module.exports = SearchController
