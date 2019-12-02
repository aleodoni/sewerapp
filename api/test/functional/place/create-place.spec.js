'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Places')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('places')
})

test('place created successfully', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/places')
    .loginVia(user)
    .send({ name: 'Piçarras' })
    .end()

  assert.equal(response.status, 200)
  assert.propertyVal(response.body, 'name', 'Piçarras')
  assert.propertyVal(response.body, 'id', 1)
})

test('validade and return error name null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/places')
    .loginVia(user)
    .send({ name: null })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on name')
})
