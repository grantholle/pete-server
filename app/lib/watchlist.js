'use strict'

const getMoviedb = require('./tmdb')
/** @type {typeof import('../Models/Movie')} */
const Movie = use('App/Models/Movie')
/** @type {typeof import('../Models/Show')} */
const Show = use('App/Models/Show')
const notify = require('./notify')

/**
 * Checks the TV watchlist, downloading
 * the needed shows
 *
 * @returns Promise<void>
 */
module.exports.tv = async () => {
  notify(`Running TV watchlist check...`)

  const moviedb = await getMoviedb()
  const { results } = await moviedb.accountTvWatchlist()

  notify(`There ${results.length === 1 ? 'is' : 'are'} ${results.length} show${results.length !== 1 ? 's' : ''} in your watchlist`)

  // Iterate through each show one at a time
  for (const watchlistShow of results) {
    // Get show info
    let showInfo

    try {
      showInfo = await moviedb.tvInfo(watchlistShow.id)
    } catch (err) {
      notify({
        type: 'error',
        message: `Failed getting show info: ${err.message}`
      })

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
      notify({
        message: `Failed processing ${show.name}: ${err.message}`,
        type: 'error'
      })
    }
  }
}

/**
 * Checks the movie watchlist, downloading
 * the needed movies
 *
 * @returns Promise<void>
 */
module.exports.movies = async () => {
  notify(`Running movie watchlist check...`)

  const moviedb = await getMoviedb()
  const { results } = await moviedb.accountMovieWatchlist()

  notify(`There ${results.length === 1 ? 'is' : 'are'} ${results.length} movie${results.length !== 1 ? 's' : ''} in your watchlist.`)

  for (const result of results) {
    notify(`Processing ${result.title} from your watchlist.`)

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
      notify({
        type: 'error',
        message: `Error finding and adding magnet: ${err.message}`
      })
    }
  }
}
