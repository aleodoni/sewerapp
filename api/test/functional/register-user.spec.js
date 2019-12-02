'use strict'

const Factory = use('Factory')
const User = use('App/Models/User')
const { test, trait } = use('Test/Suite')('Register User')

trait('Test/ApiClient')

test('registers a new user and generates a jwt', async ({ assert, client }) => {
  const { username, email, password } = await Factory.model(
    'App/Models/User'
  ).make()

  const response = await client
    .post('/api/register')
    .send({
      username,
      email,
      password
    })
    .end()

  response.assertStatus(200)

  response.assertJSONSubset({
    user: {
      email,
      name: username
    }
  })

  assert.isDefined(response.body.token)

  await User.query()
    .where({ email })
    .firstOrFail()
})

test('registers a new user with existing username', async ({ assert, client }) => {
  await User.create({
    username: 'teste',
    email: 'teste@gmail.com',
    password: '123456'
  })

  const response = await client
    .post('/api/register')
    .send({
      username: 'teste',
      email: 'teste@gmail.com',
      password: '123456'
    })
    .end()

  response.assertStatus(400)
})

test('try to register user without username', async ({ assert, client }) => {
  const response = await client
    .post('/api/register')
    .send({
      username: null,
      email: 'aleodoni@gmail.com',
      password: '123456'
    })
    .end()

  response.assertStatus(400)
})

test('try to register user without email', async ({ assert, client }) => {
  const response = await client
    .post('/api/register')
    .send({
      username: 'aleodoni',
      email: null,
      password: '123456'
    })
    .end()

  response.assertStatus(400)
})

test('try to register user without password', async ({ assert, client }) => {
  const response = await client
    .post('/api/register')
    .send({
      username: 'aleodoni',
      email: 'aleodoni@gmail.com',
      password: null
    })
    .end()

  response.assertStatus(400)
})
