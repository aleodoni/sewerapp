'use strict'

class Register {
  get rules () {
    return {
      name: 'required',
      email: 'required',
      password: 'required'
    }
  }
}

module.exports = Register
