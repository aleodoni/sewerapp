'use strict'

const Factory = use('Factory')
const User = use('App/Models/User')
const { test, trait } = use('Test/Suite')('Authenticate User')

trait('Test/ApiClient')

test('authenticate user using username/password', async ({
  assert,
  client
}) => {
  const { username, email, password } = await Factory.model(
    'App/Models/User'
  ).make()

  const userCreated = new User()

  userCreated.fill({
    username,
    email,
    password
  })

  await userCreated.save()

  const response = await client
    .post('/api/sessions')
    .send({ username, password })
    .end()

  response.assertStatus(200)

  response.assertJSONSubset({
    user: {
      email,
      username
    }
  })

  assert.isDefined(response.body.token)
})

test('authentication error wrong password', async ({ assert, client }) => {
  const response = await client
    .post('/api/sessions')
    .send({ username: 'doesnotexist', password: '333444' })
    .end()

  response.assertStatus(401)

  assert.isUndefined(response.body.token)
})

test('authentication error missing username', async ({ assert, client }) => {
  const response = await client
    .post('/api/sessions')
    .send({ password: '333444' })
    .end()

  response.assertStatus(500)

  assert.isUndefined(response.body.token)
})

test('authentication fails missing password', async ({ assert, client }) => {
  const response = await client
    .post('/api/sessions')
    .send({ username: 'dummy' })
    .end()

  response.assertStatus(401)

  assert.isUndefined(response.body.token)
})
