'use strict'

const User = use('App/Models/User')
const UsernameOrPasswordException = use('App/Exceptions/UsernameOrPasswordException')

class RegisterService {
  constructor (Config) {
    this.Config = Config
  }

  async checkExists (email) {
    const searchEmail = await User
      .query()
      .where('email', email)
      .first()

    if (searchEmail) {
      throw new UsernameOrPasswordException()
    }
  }

  async register (name, email, password) {
    const user = await User.create({ name, email, password })

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email
    }

    return userData
  }
}

module.exports = new RegisterService()
