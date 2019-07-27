'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Config = use(`App/Models/Config`)

/**
 * Resourceful controller for interacting with configs
 */
class ConfigController {
  /**
   * Gets user config from the db
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async index ({ response }) {
    let config = await Config.last()

    if (!config) {
      config = await Config.create({})
    }

    await config.reload()

    return response.json(config)
  }

  /**
   * Update config details.
   * PUT or PATCH configs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request, response }) {
    const config = await Config.last()

    config.merge(request.only([
      `tv_directory`,
      `movie_directory`,
      `transmission_username`,
      `transmission_pw`,
      `transmission_host`,
      `transmission_port`,
      `pushbullet_token`,
      `notify_on_start`,
      `notify_on_finish`,
      `movie_quality`,
      `use_yify`,
      `fallback_movie_quality`,
    ]))
    await config.save()

    return response.json(config)
  }
}

module.exports = ConfigController
