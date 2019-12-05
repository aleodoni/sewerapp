'use strict'

const UpdateUserService = use('App/Services/UpdateUserService')

class UserController {
  async update ({ auth, request }) {
    const userId = auth.user.id

    const data = request.only(['name', 'email', 'oldPassword', 'password', 'confirmPassword'])

    const allData = {
      userId,
      ...data
    }

    const user = await UpdateUserService.run(allData)

    return user
  }
}

module.exports = UserController
