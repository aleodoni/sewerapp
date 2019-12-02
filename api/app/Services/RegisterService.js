'use strict'

const User = use('App/Models/User')
const UsernameOrPasswordException = use('App/Exceptions/UsernameOrPasswordException')

class RegisterService {
  constructor (Config) {
    this.Config = Config
  }

  async checkExists (username, email) {
    const searchUsername = await User
      .query()
      .where('username', username)
      .first()

    if (searchUsername) {
      throw new UsernameOrPasswordException()
    }

    const searchEmail = await User
      .query()
      .where('email', email)
      .first()

    if (searchEmail) {
      throw new UsernameOrPasswordException()
    }
  }

  async register (username, email, password) {
    const user = await User.create({ username, email, password })

    const userData = {
      id: user.id,
      name: user.username,
      email: user.email
    }

    return userData
  }
}

module.exports = new RegisterService()
