'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Places')
const Database = use('Database')

trait('Test/ApiClient')

beforeEach(async () => {
  await Database.truncate('places')
})

test('place created successfully', async ({ assert, client }) => {
  const response = await client
    .post('/api/places')
    .send({ name: 'Piçarras' })
    .end()

  assert.equal(response.status, 200)
  assert.propertyVal(response.body, 'name', 'Piçarras')
  assert.propertyVal(response.body, 'id', 1)
})

test('validade and return error name null', async ({ assert, client }) => {
  const response = await client
    .post('/api/places')
    .send({ name: null })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on name')
})
