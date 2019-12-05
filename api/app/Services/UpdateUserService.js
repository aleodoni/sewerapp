'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')
const GeneralException = use('App/Exceptions/GeneralException')

class UpdateUserService {
  async run ({ userId, name, email, oldPassword, password, confirmPassword }) {
    const user = await User.findOrFail(userId)

    if (email && email !== user.email) {
      const userExists = await User
        .query()
        .where('email', email)
        .first()

      if (userExists) {
        throw new GeneralException(400, 'User already exists.')
      }
    }

    if (oldPassword && !(await Hash.verify(oldPassword, user.password))) {
      throw new GeneralException(400, 'Password does not match.')
    }

    user.name = name
    user.email = email
    if (password) {
      user.password = password
    }

    await user.save()

    return user
  }
}

module.exports = new UpdateUserService()
