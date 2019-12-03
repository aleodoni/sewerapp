'use strict'

const { test, trait, beforeEach } = use('Test/Suite')('Controller/Geos')
const Database = use('Database')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')

beforeEach(async () => {
  await Database.truncate('places')
})

test('geo created successfully', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/geos')
    .loginVia(user)
    .send({
      accuracy: 1,
      altitude: 1,
      altitudeAccuracy: 1,
      heading: 1,
      latitude: 22.443322,
      longitude: 44.332211,
      speed: 1
    })
    .end()

  assert.equal(response.status, 200)
})

test('validade and return error accuracy null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/geos')
    .loginVia(user)
    .send({
      accuracy: null,
      altitude: 1,
      altitudeAccuracy: 1,
      heading: 1,
      latitude: 22.443322,
      longitude: 44.332211,
      speed: 1
    })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on accuracy')
})

test('validade and return error altitude null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/geos')
    .loginVia(user)
    .send({
      accuracy: 1,
      altitude: null,
      altitudeAccuracy: 1,
      heading: 1,
      latitude: 22.443322,
      longitude: 44.332211,
      speed: 1
    })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on altitude')
})

test('validade and return error altitudeAccuracy null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/geos')
    .loginVia(user)
    .send({
      accuracy: 1,
      altitude: 1,
      altitudeAccuracy: null,
      heading: 1,
      latitude: 22.443322,
      longitude: 44.332211,
      speed: 1
    })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on altitudeAccuracy')
})

test('validade and return error heading null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/geos')
    .loginVia(user)
    .send({
      accuracy: 1,
      altitude: 1,
      altitudeAccuracy: 1,
      heading: null,
      latitude: 22.443322,
      longitude: 44.332211,
      speed: 1
    })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on heading')
})

test('validade and return error latitude null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/geos')
    .loginVia(user)
    .send({
      accuracy: 1,
      altitude: 1,
      altitudeAccuracy: 1,
      heading: 1,
      latitude: null,
      longitude: 44.332211,
      speed: 1
    })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on latitude')
})

test('validade and return error longitude null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/geos')
    .loginVia(user)
    .send({
      accuracy: 1,
      altitude: 1,
      altitudeAccuracy: 1,
      heading: 1,
      latitude: 22.443322,
      longitude: null,
      speed: 1
    })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on longitude')
})

test('validade and return error speed null', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()

  const response = await client
    .post('/api/geos')
    .loginVia(user)
    .send({
      accuracy: 1,
      altitude: 1,
      altitudeAccuracy: 1,
      heading: 1,
      latitude: 22.443322,
      longitude: 44.332211,
      speed: null
    })
    .end()

  assert.equal(response.status, 400)
  assert.equal(response.body[0].message, 'required validation failed on speed')
})
