'use strict'

class Register {
  get rules () {
    return {
      username: 'required',
      email: 'required',
      password: 'required'
    }
  }
}

module.exports = Register
