'use strict'

const moviedb = require('../../tmdb')
const Movie = use('App/Models/Movie')
const Logger = use('Logger')
const Show = use('App/Models/Show')
const Episode = use('App/Models/Episode')

class WatchlistController {
  /**
   * Remove or add an item to the tv/movie watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async update ({ response, request }) {
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
    const { results } = await moviedb.accountMovieWatchlist()

    const magnets = results.map(async (m) => {
      // Create the movie entry
      const movie = await Movie.create({
        tmdb_id: m.id,
        name: m.title,
        year: Number(m.release_date.substring(0, 4))
      })

      // Remove the movie from the watchlist
      // since we have a record of it locally
      // Do it asynchronously
      moviedb.removeMovieFromWatchlist(m.id)

      return await movie.search()
    })

    return response.json({ magnets })
  }

  /**
   * Processes shows from the tv watchlist
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async tv ({ response }) {
    const { results } = await moviedb.accountTvWatchlist()

    const magnets = results.map(async (m) => {
      const movie = await Movie.create({
        tmdb_id: m.id,
        name: m.title
      })

      return await movie.search()
    })

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

      if (!show.imdb_id) {
        const { imdb_id } = await moviedb.tvExternalIds(watchlistShow.id)
        show.imdb_id = imdb_id
      }

      // Process a season's episodes
      const processSeason = async (season, startEpisode) => {
        let res

        try {
          // Get the season information for the season we currently want
          res = await moviedb.tvSeasonInfo({ id: show.tmdb_id, season_number: season })
        } catch (err) {
          winston.error(`Could not get season ${season} of ${show.name}: ${err.message}`)
          return
        }

        // Only get episodes that are greater than the starting episde
        // and we don't have an unadded episode that is released
        // and the attempts is less than the max allowed
        // Sort to take advantage of ending the iteration early
        let episodes = res.episodes.filter(e => {
          return e.episode_number >= startEpisode &&
            !show.episodes.some(se => {
              return (se.episode === e.episode_number &&
                se.season === e.season_number &&
                se.added) ||
                (!se.added && se.attempts > EPISODE_FAILURE_MAX)
            })
        }).sort((a, b) => a.episode_number - b.episode_number)

        // If no episodes are needed for this season
        if (!episodes || episodes.length === 0) {
          winston.info(`No episodes needed for season ${season} of ${show.name}`)
          episodes = []
        }

        let hasFutureEpisode = false

        for (const episode of episodes) {
          // If it hasn't aired yet, just break from whatever is possibly left
          // Try a typical evening (18 hours), plus the 12 hour time difference from here
          // since it will be created as the day at midnight
          if (!episode.air_date || now < moment(episode.air_date, 'YYYY-MM-DD').add(30, 'hours')) {
            // show.next_air_date = episode.air_date
            // show.start_episode = episode.episode_number
            hasFutureEpisode = true
            break
          }

          winston.info(`Searching for season ${episode.season_number} episode ${episode.episode_number} of ${show.name}`)

          let directory = p.join(config.locations.tv, show.name, `Season ${episode.season_number}`)

          try {
            const magnet = await searchForEpisode(show, episode, show.use_alternate_quality)

            winston.info(`Episode${magnet ? ' ' : ' not '}found for season ${episode.season_number} episode ${episode.episode_number} of ${show.name}`)

            // Don't add anything if a magnet wasn't found
            if (!magnet) {
              continue
            }

            // Add the torrent
            const name = `${show.name} - ${label(episode.season_number, episode.episode_number)} - ${sanitize(episode.name)}`
            const torrent = await transmission.addMagnet(magnet, name, directory)
            await database.updateOrCreateEpisode(show, episode, !!torrent)
          } catch (err) {
            winston.error(err)
          }
        }

        // Check if there's a next season
        const nextSeason = showInfo.seasons.find(s => s.season_number === (season + 1))

        // If there's a season after the current one,
        // change the settings and check it for episodes
        if (nextSeason && !hasFutureEpisode) {
          show.start_season = nextSeason.season_number
          show.start_episode = 1
          await processSeason(show.start_season, show.start_episode)
          return
        }

        // Reload the database to keep the torrents collection intact
        await database.saveShow(show)
      }

      await processSeason(show.start_season, show.start_episode)
    }

    return response.json({ magnets })
  }
}

module.exports = WatchlistController
