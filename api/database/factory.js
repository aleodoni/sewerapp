'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker, data) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: '123456',
    ...data
  }
})

Factory.blueprint('App/Models/Place', (faker, index, data) => {
  return {
    name: data[index]
  }
})

Factory.blueprint('App/Models/Geo', (faker, index, data) => {
  return {
    accuracy: 1,
    altitude: 1,
    altitudeAccuracy: 1,
    heading: 1,
    latitude: -26.753410,
    longitude: -46.677137,
    speed: 1
  }
})
