'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { username, password } = request.all()

    const user = await User.query()
      .where('username', username)
      .select('username', 'email')
      .first()

    const token = await auth.attempt(username, password)

    return response.ok({ user, token })
  }
}

module.exports = SessionController
