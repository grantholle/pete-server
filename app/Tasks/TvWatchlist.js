'use strict'

const Task = use('Task')
const { tv } = require('../lib/watchlist')

class TvWatchlist extends Task {
  static get schedule () {
    return '0 0 12 * * *'
  }

  async handle () {
    await tv()
  }
}

module.exports = TvWatchlist
