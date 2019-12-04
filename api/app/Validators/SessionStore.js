'use strict'

const Base = use('App/Validators/Base')

class SessionStore extends Base {
  get rules () {
    return {
      email: 'required',
      password: 'required'
    }
  }
}

module.exports = SessionStore
