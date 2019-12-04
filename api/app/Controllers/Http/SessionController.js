'use strict'

const AuthenticateException = use('App/Exceptions/AuthenticateException')
const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const user = await User.query()
      .where('email', email)
      .select('id', 'name', 'email')
      .first()

    try {
      const token = await auth.attempt(email, password)
      return response.ok({ user, token })
    } catch (err) {
      throw new AuthenticateException()
    }
  }
}

module.exports = SessionController
