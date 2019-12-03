'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Geos/Delete')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('geos')
  await Factory.model('App/Models/Geo').create()
})

test('geo deleted successfully', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .delete('/api/geos/1')
    .loginVia(user)
    .end()

  assert.equal(response.status, 200)
})

test('try to delete geo id invalid', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .delete('/api/geos/100')
    .loginVia(user)
    .end()

  assert.equal(response.status, 404)
})
