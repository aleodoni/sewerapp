'use strict'

class Base {
  constructor (data) {
    this.data = data
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).json({
      message: errorMessages[0].message
    })
  }
}

module.exports = Base
