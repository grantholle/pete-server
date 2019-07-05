'use strict'

const Config = use('App/Models/Config')
const yify = require('./yify')
const rarbg = require('./rarbg-movie')
const { clone, first } = require('lodash')

/**
 * This function takes in a movie from tmdb
 * and returns the final magnet url based on
 * config settings and availability
 *
 * @param {App/Models/Movie} movie
 * @param {App/Models/Config} config
 * @returns {string} magnet URL
 */
module.exports = async movie => {
  const config = await Config.first()
  const source = config.use_yify ? yify : rarbg
  const fallbackSource = config.use_yify ? rarbg : false
  const qualities = clone(Config.movieQualities)

  return new Promise(resolve => {
    // We'll give yify a higher priority for searching... I guess
    const search = async (searcher, quality) => {
      const magnet = await searcher(movie, quality)

      // If there's a result, then yay, return that
      // Or if there's no fallback search source and no more qualities to try
      if (magnet || (!fallbackSource && (qualities.length === 0 || !config.fallback_movie_quality))) {
        return resolve(magnet)
      }

      // If there's a fallback source search using that
      if (fallbackSource) {
        return fallbackSource(movie, quality).then(magnet => {
          if (magnet || (!config.fallback_movie_quality || qualities.length === 0)) {
            return resolve(magnet)
          }

          search(source, qualities.shift())
        })
      }

      // No fallback and there is still other qualities
      search(source, qualities.shift())
    }

    let quality = qualities.splice(qualities.indexOf(config.movie_quality), 1)
    search(source, first(quality))
  })
}