'use strict'

const Base = use('App/Validators/Base')

class SessionStore extends Base {
  get rules () {
    return {
      username: 'required',
      password: 'required'
    }
  }
}

module.exports = SessionStore
