'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Geos/Index')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('geos')
})

test('get geos', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .get('/api/geos')
    .loginVia(user)
    .end()

  assert.equal(response.status, 200)
  assert.typeOf(response.body, 'array')
})
