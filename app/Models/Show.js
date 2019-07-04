'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Logger = use('Logger')
const Config = use('App/Models/Config')
const Episode = use('App/Models/Episode')
const p = require('path')
const searchForEpisode = require('../lib/search-tv')
const label = require('../lib/episode-label')
const moviedb = require('../tmdb')

class Show extends Model {
  /**
   * Relationship to episodes
   */
  episodes () {
    return this.hasMany('App/Models/Episode', 'id', 'show_id')
  }

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

    episodes = episodes.toJSON()

    // If no episodes are needed for this season
    if (!episodes || episodes.length === 0) {
      Logger.info(`No episodes needed for season ${season} of ${this.name}`)
      return false
    }

    Logger.info(`There are ${episodes.length} for ${this.name} that need to be added.`)

    for (const episode of episodes) {
      Logger.info(`Searching for season ${episode.season} episode ${episode.episode} of ${this.name}`)

      try {
        const magnet = await searchForEpisode(this, episode, this.use_alt_quality)

        Logger.info(`Episode${magnet ? ' ' : ' not '}found for season ${episode.season} episode ${episode.episode} of ${this.name}: ${magnet}.`)

        // Don't add anything if a magnet wasn't found
        if (!magnet) {
          continue
        }

        // magnets.push(magnet)
        // Add a download for this torrent
        Logger.info(`Do something with the magnet at this point`)
      } catch (err) {
        Logger.error(`Error occurred searching for season ${episode.season} episode ${episode.episode} of ${this.name}`, err)
      }
    }

    return true
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
      Logger.info(`There are ${episodesToSave.length} episodes in season ${season} for ${this.name}.`)

      await this.episodes().createMany(episodesToSave.map(e => ({
        name: e.name,
        season: e.season_number,
        episode: e.episode_number
      })))
    }
  }
}

module.exports = Show
