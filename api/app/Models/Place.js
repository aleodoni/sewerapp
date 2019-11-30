'use strict'

const Model = use('Model')

class Place extends Model {
  static boot () {
    super.boot()
  }

  geos () {
    return this.hasMany('App/Models/Geo')
  }
}

module.exports = Place
