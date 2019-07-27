'use strict'

const { transmission } = require('../../app/lib/transmission')
/** @type {typeof import('../../app/Models/Download')} */
const Download = use('App/Models/Download')

module.exports = async suite => {
  suite.Context.macro('clearTransmission', async () => {
    const t = await transmission()
    const downloads = await Download.all()
    const ids = downloads.toJSON().map(d => d.transmission_id)
    await t.remove(ids)
  })
}
