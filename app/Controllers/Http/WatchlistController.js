'use strict'

const getMoviedb = require('../../lib/tmdb')
/** @type {typeof import('../../Models/Movie')} */
const Movie = use('App/Models/Movie')
const Logger = use('Logger')
/** @type {typeof import('../../Models/Show')} */
const Show = use('App/Models/Show')

class WatchlistController {
  /**
   * Remove or add an item to the tv/movie watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async update ({ response, request }) {
    const moviedb = await getMoviedb()
    const res = await moviedb.accountWatchlistUpdate(request.only([
      'media_type',
      'media_id',
      'watchlist'
    ]))

    return response.json(res)
  }

  /**
   * Processes movies from the movie watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async movies ({ response }) {
    const moviedb = await getMoviedb()
    const { results } = await moviedb.accountMovieWatchlist()

    Logger.info(`There are ${results.length} movies in your watchlist.`)

    for (const result of results) {
      Logger.info(`Processing ${result.title} from your watchlist.`)

      const movie = await Movie.create({
        tmdb_id: result.id,
        name: result.title,
        year: Number(result.release_date.substring(0, 4))
      })

      // Remove the movie from the watchlist
      // since we have a record of it locally
      // Do it asynchronously
      moviedb.removeMovieFromWatchlist(result.id)

      try {
        await movie.findAndAddMagnet()
      } catch (err) {
        Logger.error(`Error finding and adding magnet: ${err.message}`, err)
      }
    }

    return response.json({})
  }

  /**
   * Processes shows from the tv watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async tv ({ response }) {
    const moviedb = await getMoviedb()
    const { results } = await moviedb.accountTvWatchlist()

    Logger.info(`${results.length} shows in your watchlist`)

    // Iterate through each show one at a time
    for (const watchlistShow of results) {
      // Get show info
      let showInfo

      try {
        showInfo = await moviedb.tvInfo(watchlistShow.id)
      } catch (err) {
        Logger.error('Failed getting show info', err)
        continue
      }

      // Retrieve this show from our database or create a new one
      const show = await Show.findOrCreate(
        { tmdb_id: watchlistShow.id },
        {
          tmdb_id: watchlistShow.id,
          name: showInfo.name,
          // Start on the most recent season?
          start_season: showInfo.seasons.reduce((maxSeason, season) => {
            return maxSeason > season.season_number ?
              maxSeason : season.season_number
          }, 1),
          start_episode: 1
        }
      )
      await show.reload()

      if (!show.imdb_id) {
        show.imdb_id = await moviedb.getImdbId(watchlistShow.id)
      }

      const processSeason = async (season, episode) => {
        // Process a season's episodes
        const hasFutureEpisode = await show.searchForSeason(season, episode)

        // Check if there's a next season
        const nextSeason = showInfo.seasons.find(s => s.season_number === (show.start_season + 1))

        // If there's a season after the current one,
        // change the settings and check it for episodes
        if (nextSeason && !hasFutureEpisode) {
          show.start_season = nextSeason.season_number
          show.start_episode = 1
          await processSeason(show.start_season, show.start_episode)
        }
      }

      try {
        await processSeason(show.start_season, show.start_episode)
        await show.save()
      } catch (err) {
        Logger.error(`Failed processing ${show.name}`, err)
      }
    }

    return response.json({})
  }
}

module.exports = WatchlistController
