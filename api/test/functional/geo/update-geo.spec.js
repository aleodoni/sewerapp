'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Geos/Update')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('places')
  await Factory.model('App/Models/Geo').create()
})

test('geo updated successfully', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  const place = await Factory.model('App/Models/Place').create(['Piçarras'])

  const response = await client
    .put('/api/geos/1')
    .loginVia(user)
    .send({ place_id: place.id })
    .end()

  assert.equal(response.status, 200)
  assert.propertyVal(response.body, 'place_id', place.id)
})

test('validade and return error place_id null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .put('/api/geos/1')
    .loginVia(user)
    .send({ place_id: null })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on place_id')
})

test('try to update geo id invalid', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .put('/api/geos/100')
    .loginVia(user)
    .send({ place_id: 1 })
    .end()

  assert.equal(response.status, 404)
})
