'use strict'

const { test, beforeEach } = use('Test/Suite')('Model/Places')
const Place = use('App/Models/Place')
const Database = use('Database')

beforeEach(async () => {
  await Database.truncate('places')
})

test('new place created successsfully', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  const countBefore = await Database.from('places').count()
  const totalBefore = countBefore[0]['count(*)']

  const place = await Place.create(placeData)

  const countAfter = await Database.from('places').count()
  const totalAfter = countAfter[0]['count(*)']

  assert.equal(place.name, placeData.name)
  assert.equal(totalBefore, 0)
  assert.equal(totalAfter, 1)
})

test('try to insert null place name', async ({ assert }) => {
  const placeData = {
    name: null
  }

  assert.plan(1)

  try {
    await Place.create(placeData)
  } catch (err) {
    assert.match(err.message, /NOT NULL constraint failed: places.name/)
  }
})

test('try to insert duplicated place name', async ({ assert }) => {
  const placeData = {
    name: 'Piçarras'
  }

  await Place.create(placeData)

  assert.plan(1)

  try {
    await Place.create(placeData)
  } catch (err) {
    assert.match(err.message, /UNIQUE constraint failed: places.name/)
  }
})
