'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')
const message = 'Not Found'
const status = 404
const code = 'E_NOTFOUND'

class NotFoundException extends LogicalException {
  constructor () {
    super(message, status, code)
  }
}

module.exports = NotFoundException
