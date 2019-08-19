'use strict'

const Task = use('Task')
const { movies } = require('../lib/watchlist')

class MovieWatchlist extends Task {
  static get schedule () {
    return '0 0 */1 * * *'
  }

  async handle () {
    await movies()
  }
}

module.exports = MovieWatchlist
