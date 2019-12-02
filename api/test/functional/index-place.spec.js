'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Places/Index')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('places')
  await Factory.model('App/Models/Place').createMany(3, ['Penha', 'Piçarras', 'Barra Velha'])
})

test('get places', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .get('/api/places')
    .loginVia(user)
    .end()

  assert.equal(response.status, 200)
  assert.typeOf(response.body, 'array')
})
