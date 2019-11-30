'use strict'

const { test, beforeEach } = use('Test/Suite')('Model/Geos')
const Database = use('Database')

const Place = use('App/Models/Place')
const Geo = use('App/Models/Geo')

beforeEach(async () => {
  await Database.truncate('places')
})

test('new geo created successsfully', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  const place = await Place.first()

  const geo = new Geo()
  geo.accuracy = 1
  geo.altitude = 1
  geo.altitudeAccuracy = 1
  geo.heading = 1
  geo.latitude = 12.444333
  geo.longitude = 33.444323
  geo.speed = 4

  await place.geos().save(geo)

  const getPlace = await Place.query().with('geos').fetch()

  assert.equal(geo.speed, 4)
  assert.equal(getPlace.toJSON()[0].geos[0].speed, 4)
})

test('try to latitude null', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  const place = await Place.first()

  const geo = new Geo()
  geo.accuracy = 1
  geo.altitude = 1
  geo.altitudeAccuracy = 1
  geo.heading = 1
  geo.latitude = null
  geo.longitude = 33.444323
  geo.speed = 4

  assert.plan(1)

  try {
    await place.geos().save(geo)
  } catch (err) {
    assert.match(err.message, /NOT NULL constraint failed: geos.latitude/)
  }
})

test('try to longitude null', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  const place = await Place.first()

  const geo = new Geo()
  geo.accuracy = 1
  geo.altitude = 1
  geo.altitudeAccuracy = 1
  geo.heading = 1
  geo.latitude = 33.444444
  geo.longitude = null
  geo.speed = 4

  assert.plan(1)

  try {
    await place.geos().save(geo)
  } catch (err) {
    assert.match(err.message, /NOT NULL constraint failed: geos.longitude/)
  }
})

test('try to accuracy null', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  const place = await Place.first()

  const geo = new Geo()
  geo.accuracy = null
  geo.altitude = 1
  geo.altitudeAccuracy = 1
  geo.heading = 1
  geo.latitude = 33.444444
  geo.longitude = 44.666666
  geo.speed = 4

  assert.plan(1)

  try {
    await place.geos().save(geo)
  } catch (err) {
    assert.match(err.message, /NOT NULL constraint failed: geos.accuracy/)
  }
})

test('try to altitude null', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  const place = await Place.first()

  const geo = new Geo()
  geo.accuracy = 1
  geo.altitude = null
  geo.altitudeAccuracy = 1
  geo.heading = 1
  geo.latitude = 33.444444
  geo.longitude = 44.666666
  geo.speed = 4

  assert.plan(1)

  try {
    await place.geos().save(geo)
  } catch (err) {
    assert.match(err.message, /NOT NULL constraint failed: geos.altitude/)
  }
})

test('try to altitudeAccuracy null', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  const place = await Place.first()

  const geo = new Geo()
  geo.accuracy = 1
  geo.altitude = 1
  geo.altitudeAccuracy = null
  geo.heading = 1
  geo.latitude = 33.444444
  geo.longitude = 44.666666
  geo.speed = 4

  assert.plan(1)

  try {
    await place.geos().save(geo)
  } catch (err) {
    assert.match(err.message, /NOT NULL constraint failed: geos.altitudeAccuracy/)
  }
})

test('try to heading null', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  const place = await Place.first()

  const geo = new Geo()
  geo.accuracy = 1
  geo.altitude = 1
  geo.altitudeAccuracy = 1
  geo.heading = null
  geo.latitude = 33.444444
  geo.longitude = 44.666666
  geo.speed = 4

  assert.plan(1)

  try {
    await place.geos().save(geo)
  } catch (err) {
    assert.match(err.message, /NOT NULL constraint failed: geos.heading/)
  }
})

test('try to speed null', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  const place = await Place.first()

  const geo = new Geo()
  geo.accuracy = 1
  geo.altitude = 1
  geo.altitudeAccuracy = 1
  geo.heading = 1
  geo.latitude = 33.444444
  geo.longitude = 44.666666
  geo.speed = null

  assert.plan(1)

  try {
    await place.geos().save(geo)
  } catch (err) {
    assert.match(err.message, /NOT NULL constraint failed: geos.speed/)
  }
})
