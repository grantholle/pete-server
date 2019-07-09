'use strict'

const { test, trait } = use('Test/Suite')('Transmission')
const Config = use('App/Models/Config')
const Download = use('App/Models/Download')
const transmission = require('../../app/lib/transmission')

trait('DatabaseTransactions')

test('make sure torrent gets added and a download is added', async ({ assert }) => {
  const hash = '25476766bdb2d52119e1f40cf4801c05f9f3cd06'
  const url = 'https://yts.lt/torrent/download/25476766BDB2D52119E1F40CF4801C05F9F3CD06'
  const name = 'Star Wars'
  const dir = __dirname

  await Config.create({
    transmission_username: 'a',
    transmission_pw: '111',
  })

  await transmission.add(url, name, dir)

  let download = await Download.first()
  download = download.toJSON()

  assert.equal(download.url, url)
  assert.equal(download.name, name)
  assert.equal(download.path, dir)
  assert.equal(download.hash, hash)

  // Do some clean up
  const trans = await transmission.transmission()
  const res = await trans.remove(download.transmission_id, true)
}).timeout(30000)
