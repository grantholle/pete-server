'use strict'

const RarbgApi = require('rarbg')
const sanitize = require('sanitize-filename')
const { first } = require('lodash')

/**
 * Search rarbg for a movie
 *
 * @param {App/Model/Movie} movie
 * @param {string} quality
 * @returns {Promise}
 */
module.exports = async (movie, quality) => {
  const rarbg = new RarbgApi()
  const searchParams = {
    search_string: `${sanitize(movie.name)} ${movie.year || ''}`.trim(),
    sort: 'seeders',
    category: rarbg.categories[`MOVIES_X264_${quality.replace('p', '')}`]
  }

  try {
    const results = await rarbg.search(searchParams)

    return first(results).download
  } catch (err) {
    if (err.message.toLowerCase().includes('no results')) {
      return false
    }

    throw err
  }
}
