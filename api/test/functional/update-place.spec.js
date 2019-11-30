'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Places/Update')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')

beforeEach(async () => {
  await Database.truncate('places')
  await Factory.model('App/Models/Place').create(['Piçarras'])
})

test('place updated successfully', async ({ assert, client }) => {
  const response = await client
    .put('/api/places/1')
    .send({ name: 'Pissarras' })
    .end()

  assert.equal(response.status, 200)
  assert.propertyVal(response.body, 'name', 'Pissarras')
  assert.propertyVal(response.body, 'id', 1)
})

test('validade and return error name null', async ({ assert, client }) => {
  const response = await client
    .put('/api/places/1')
    .send({ name: null })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on name')
})