'use strict'

const yify = require('yify-search')
const { first } = require('lodash')

/**
 * Search rarbg for a movie based on certain criterion
 * Movie should be the object from TMdb
 *
 * @param {Object} movie
 * @param {string} quality
 * @returns {Promise}
 */
module.exports = (name, year, quality) => {
  return new Promise((resolve, reject) => {
    yify.search(name, (err, results) => {
      if (err) {
        return reject(err)
      }

      // Get the movie with the matching release year
      const yifyMovie = year ? results.find(item => item.year === year) : first(results)

      // If no movie matched, return a falsy result
      if (!yifyMovie) {
        return resolve(false)
      }

      // Resolve the url
      const torrent = yifyMovie.torrents.find(t => t.quality === quality)

      resolve(torrent ? torrent.url : false)
    })
  })
}
