'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Places/Delete')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('places')
  await Factory.model('App/Models/Place').create(['Piçarras'])
})

test('place deleted successfully', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .delete('/api/places/1')
    .loginVia(user)
    .end()

  assert.equal(response.status, 200)
})

test('try to delete place id invalid', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .delete('/api/places/100')
    .loginVia(user)
    .end()

  assert.equal(response.status, 404)
})
