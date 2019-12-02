'use strict'

const AuthenticateException = use('App/Exceptions/AuthenticateException')
const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { username, password } = request.all()

    const user = await User.query()
      .where('username', username)
      .select('id', 'username', 'email')
      .first()

    try {
      const token = await auth.attempt(username, password)
      return response.ok({ user, token })
    } catch (err) {
      throw new AuthenticateException()
    }
  }
}

module.exports = SessionController
