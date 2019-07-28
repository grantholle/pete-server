'use strict'

const getMoviedb = require('../../lib/tmdb')

class SearchController {
  /**
   * Search for a movie
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async movies ({ request, response }) {
    const query = request.input('query', '')

    const moviedb = await getMoviedb()
    const results = await moviedb.searchMovie({ query })

    return response.json(results)
  }
}

module.exports = SearchController
