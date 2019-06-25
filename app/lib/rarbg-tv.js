'use strict'

const RarbgApi = require('rarbg')
const labelize = require('./episode-label')
const { first } = require('lodash')

/**
 * Search rarbg for a movie based on certain criterion
 * Movie should be the object from TMdb
 *
 * @param {App/Models/Show} show
 * @param {App/Models/Episode} episode
 * @param {string} quality
 * @returns {Promise}
 */
module.exports = async (show, episode, quality) => {
  const rarbg = new RarbgApi()
  const searchParams = {
    search_imdb: `tt${show.imdb_id}`,
    search_string: labelize(episode.season, episode.episode),
    sort: 'seeders',
    category: quality === 'HDTV' ? rarbg.categories.TV_EPISODES : rarbg.categories.TV_HD_EPISODES
  }

  if (!show.imdb_id) {
    delete searchParams.search_imdb
    searchParams.search_string = `${show.name} ${searchParams.search_string}`
  }

  try {
    const results = await rarbg.search(searchParams)
    const goodQuality = quality === 'HDTV' ? first(results) : results.find(r => r.filename.includes(quality))

    return goodQuality ? goodQuality.download : false
  } catch (err) {
    if (err.message.toLowerCase().includes('no results')) {
      return false
    }

    throw err
  }
}
