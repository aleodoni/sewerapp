'use strict'

const RegisterService = use('App/Services/RegisterService')

class RegisterController {
  async store ({ auth, request, response }) {
    const { username, email, password } = request.all()

    try {
      await RegisterService.checkExists(username, email)

      const userData = await RegisterService.register(username, email, password)

      const token = await auth.generate(userData)

      return response.ok({
        user: userData,
        token
      })
    } catch (err) {
      return response.status(err.status).send({ error: err.message })
    }
  }
}

module.exports = RegisterController
