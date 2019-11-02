'use strict'

const User = use('App/Models/User')

class RegisterController {
  async store ({ auth, request, response }) {
    const { username, email, password } = request.all()

    const user = await User.create({ username, email, password })

    const token = await auth.generate(user)

    return response.ok({ user, token })
  }
}

module.exports = RegisterController
