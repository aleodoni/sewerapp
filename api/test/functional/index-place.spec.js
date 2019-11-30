'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Places/Index')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')

beforeEach(async () => {
  await Database.truncate('places')
  await Factory.model('App/Models/Place').createMany(3, ['Penha', 'Piçarras', 'Barra Velha'])
})

test('get places', async ({ assert, client }) => {
  const response = await client
    .get('/api/places')
    .end()

  assert.equal(response.status, 200)
  assert.typeOf(response.body, 'array')
})
