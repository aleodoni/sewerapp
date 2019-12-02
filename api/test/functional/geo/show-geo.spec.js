'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Geos/Show')
const Database = use('Database')
const Factory = use('Factory')
const Place = use('App/Models/Place')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('geos')
  await Database.truncate('places')
})

test('get geo', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const place = await Place.create({ name: 'Piçarras' })

  const geo = await Factory.model('App/Models/Geo').make()

  await geo.place().associate(place)

  const response = await client
    .get('/api/geos/1')
    .loginVia(user)
    .end()

  assert.equal(response.status, 200)
  assert.equal(response.body.id, 1)
  assert.equal(response.body.place_id, 1)
})

test('try to get geo id invalid', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .get('/api/geos/100')
    .loginVia(user)
    .end()

  assert.equal(response.status, 404)
})
