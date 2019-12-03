'use strict'

class Geo {
  get rules () {
    return {
      accuracy: 'required',
      altitude: 'required',
      altitudeAccuracy: 'required',
      heading: 'required',
      latitude: 'required',
      longitude: 'required',
      speed: 'required'
    }
  }
}

module.exports = Geo
