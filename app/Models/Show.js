'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Logger = use('Logger')
const Episode = use('App/Models/Episode')
const moviedb = require('../lib/tmdb')

class Show extends Model {
  eztvCache = []

  /**
   * Relationship to episodes
   */
  episodes () {
    return this.hasMany('App/Models/Episode', 'id', 'show_id')
  }

  /**
   * Looks up the show in TMDb
   *
   * @returns {Promise<object>}
   */
  async lookup () {
    if (!this.tmdb_id) {
      throw new Error(`This movie doesn't have an id to look up in TMDb. Set one first then attmept to look up.`)
    }

    return await moviedb.tvInfo(this.tmdb_id)
  }

  /**
   * Fetches info from TMDb and populates
   * relevant properties
   *
   * @returns {Promise<void>}
   */
  async fetchAndFill () {
    const results = await this.lookup()

    await this.fillFromTmdb(results)
  }

  /**
   * Accepts the TMDb info and populates
   * properties
   *
   * @param {object} results The info from TMDb
   * @returns {Promise<void>}
   */
  async fillFromTmdb (results) {
    this.start_season = results.number_of_seasons
    this.start_episode = 1
    this.name = results.name
  }

  /**
   *
   * @param {int} season The season to search
   * @param {int} startEpisode The episode at which to start
   */
  async searchForSeason (season, startEpisode = 1) {
    // Add the episodes for the season
    await this.getEpisodesForSeason(season)

    // Get the episodes for this season and after the start episode
    let episodes = await this.episodes()
      .where('season', season)
      .where('episode', '>=', startEpisode)
      .where('added', false)
      .orderBy('episode', 'asc')
      .fetch()

    // If no episodes are needed for this season
    if (!episodes || episodes.size() === 0) {
      Logger.info(`No episodes needed for season ${season} of ${this.name}`)
      return false
    }

    Logger.info(`There are ${episodes.size()} for ${this.name} that need to be added.`)

    const magnets = {}

    for (const episode of episodes.rows) {
      Logger.info(`Searching for season ${episode.season} episode ${episode.episode} of ${this.name}`)

      try {
        const magnet = await episode.findMagnet(this)

        Logger.info(`Episode${magnet ? ' ' : ' not '}found for season ${episode.season} episode ${episode.episode} of ${this.name}: ${magnet}.`)

        // Don't add anything if a magnet wasn't found
        if (!magnet) {
          continue
        }

        magnets[episode.episode] = magnet
      } catch (err) {
        Logger.error(`Error occurred searching for season ${episode.season} episode ${episode.episode} of ${this.name}`, err)
      }
    }

    return magnets
  }

  /**
   * Adds episodes of a season locally
   *
   * @param {Number} season The season to process
   */
  async getEpisodesForSeason (season) {
    Logger.info(`Getting episodes in season ${season} for ${this.name}.`)

    let res

    try {
      // Get the season information for the season we currently want
      res = await moviedb.tvSeasonInfo({ id: this.tmdb_id, season_number: season })
    } catch (err) {
      Logger.error(`Could not get season ${season} of ${this.name}: ${err.message}`)
      return
    }

    let episodes = await this.episodes()
      .where('season', season)
      .fetch()

    episodes = episodes.toJSON().map(e => Number(e.episode))

    const episodesToSave = res.episodes.filter(e => episodes.indexOf(e.episode_number) === -1)

    if (episodesToSave) {
      Logger.info(`Adding ${episodesToSave.length} episodes in season ${season} for ${this.name} to the database.`)

      await this.episodes().createMany(episodesToSave.map(e => ({
        name: e.name,
        season: e.season_number,
        episode: e.episode_number
      })))
    }
  }
}

module.exports = Show
