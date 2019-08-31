'use strict'

/** @typedef {typeof import('@adonisjs/vow/src/Suite')} */
const { test, trait, before } = use('Test/Suite')('Transmission Updated')
/** @type {typeof import('../../app/Models/Config')} */
const Config = use('App/Models/Config')
/** @typedef {typeof import('@adonisjs/framework/src/Event')} */
const Event = use('Event')
const { getInstance } = require('../../app/lib/transmission')
/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')
const transmission_username = Env.get('TRANSMISSION_USERNAME', null)
const transmission_pw = Env.get('TRANSMISSION_PW', null)

trait('Test/ApiClient')
trait('DatabaseTransactions')

before(async () => {
  Event.fake()
})

test('copies and updates transmission with the finished script', async ({ assert, client }) => {
  await Config.create({
    transmission_username,
    transmission_pw,
  })
  const transmission = await getInstance()
  const res = await client.post(`/api/v1/script`).end()
  const homedir = require('os').homedir()
  const fs = require('fs')
  const p = require('path')
  const doneSh = p.join(homedir, `.config`, `pete`, `done.sh`)
  const session = await transmission.session()

  res.assertStatus(200)
  assert.isTrue(fs.existsSync(doneSh))
  assert.equal(session['script-torrent-done-enabled'], true)
  assert.equal(session['script-torrent-done-filename'], doneSh)
})
