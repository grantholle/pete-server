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
  async index ({ request, response }) {
    let config = await Config.first()

    if (!config) {
      config = await Config.create({})
    }

    await config.reload()

    return response.json(config)
  }

  /**
   * Render a form to be used for creating a new config.
   * GET configs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async create ({ request, response }) {
  }

  /**
   * Create/save a new config.
   * POST configs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single config.
   * GET configs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response }) {
  }

  /**
   * Render a form to update an existing config.
   * GET configs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async edit ({ params, request, response }) {
  }

  /**
   * Update config details.
   * PUT or PATCH configs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a config with id.
   * DELETE configs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ConfigController
