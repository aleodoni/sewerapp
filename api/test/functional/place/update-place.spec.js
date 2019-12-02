'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Places/Update')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('places')
  await Factory.model('App/Models/Place').create(['Piçarras'])
})

test('place updated successfully', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .put('/api/places/1')
    .loginVia(user)
    .send({ name: 'Pissarras' })
    .end()

  assert.equal(response.status, 200)
  assert.propertyVal(response.body, 'name', 'Pissarras')
  assert.propertyVal(response.body, 'id', 1)
})

test('validade and return error name null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .put('/api/places/1')
    .loginVia(user)
    .send({ name: null })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on name')
})

test('try to update place id invalid', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .delete('/api/places/100')
    .loginVia(user)
    .end()

  assert.equal(response.status, 404)
})
