'use strict'

const Config = use('Config')
const apiKey = Config.get('tmdb.apiKey')
const sessionId = Config.get('tmdb.sessionId')
const MovieDb = require('moviedb-promise')

/**
 * This is just syntactic sugar around account watchlist update
 *
 * @param {Integer} media_id
 */
MovieDb.prototype.removeMovieFromWatchlist = function (mediaId) {
  return this.accountWatchlistUpdate({ id: '{account_id}', media_type: 'movie', media_id: mediaId, watchlist: false })
}

/**
 * A wrapper around external ids that just gets the imdb id
 *
 * @param {Integer} id The id of the item for which you want to get the imdb id
 */
MovieDb.prototype.getImdbId = function (id) {
  return this.tvExternalIds(id)
    .then(result => result.imdb_id && result.imdb_id[0] === 't' ? result.imdb_id.substr(2) : result.imdb_id)
}

/**
 * A wrapper around movie info that just gets the imdb id
 *
 * @param {Integer} id The id of the item for which you want to get the imdb id
 */
MovieDb.prototype.getMovieImdbId = function (id) {
  return this.movieInfo(id)
    .then(result => result.imdb_id && result.imdb_id[0] === 't' ? result.imdb_id.substr(2) : result.imdb_id)
}

const moviedb = apiKey ? new MovieDb(apiKey) : null

if (sessionId) {
  moviedb.sessionId = sessionId
}

module.exports = moviedb
