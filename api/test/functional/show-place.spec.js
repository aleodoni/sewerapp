'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Places/Show')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')

beforeEach(async () => {
  await Database.truncate('places')
  await Factory.model('App/Models/Place').createMany(3, ['Penha', 'Piçarras', 'Barra Velha'])
})

test('get place', async ({ assert, client }) => {
  const response = await client
    .get('/api/places/1')
    .end()

  assert.equal(response.status, 200)
  assert.equal(response.body.id, 1)
  assert.equal(response.body.name, 'Penha')
})

test('try to get place id invalid', async ({ assert, client }) => {
  const response = await client
    .delete('/api/places/100')
    .end()

  assert.equal(response.status, 404)
})
