'use strict'

/** @typedef {typeof import('@adonisjs/vow/src/Suite')} */
const { test, trait, before } = use('Test/Suite')('Finished Download')
/** @type {typeof import('../../app/Models/Download')} */
const Download = use('App/Models/Download')
/** @typedef {typeof import('@adonisjs/framework/src/Event')} */
const Event = use('Event')

trait('Test/ApiClient')
trait('DatabaseTransactions')

before(async () => {
  Event.fake()
})

test('make sure that file get renamed appropriately', async ({ client }) => {
  const hash = '62d5a098f67b151ba1a023d9c739c61643119c9b'
  const title = ''
  const id = 6
  await Download.create({
    hash,
    transmission_id: id,
    name: `John Wick Chapter 3 – Parabellum (2019)`
  })

  const res = await client.post(`/api/v1/finished`).send({ hash, title, id }).end()

  res.assertStatus(204)
})
