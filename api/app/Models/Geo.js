'use strict'

const Model = use('Model')

class Geo extends Model {
  static boot () {
    super.boot()
  }

  place () {
    return this.belongsTo('App/Models/Place')
  }
}

module.exports = Geo
