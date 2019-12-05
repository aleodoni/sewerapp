'use strict'

class Register {
  get rules () {
    return {
      name: 'required',
      email: 'required|email',
      password: 'required|min:6'
    }
  }
}

module.exports = Register
