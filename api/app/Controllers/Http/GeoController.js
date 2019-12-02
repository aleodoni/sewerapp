'use strict'

const Geo = use('App/Models/Geo')
const NotFoundException = use('App/Exceptions/NotFoundException')

class GeoController {
  async index ({ response }) {
    const geos = await Geo
      .query()
      .with('place')
      .fetch()

    return response.ok(geos)
  }

  async show ({ params, response }) {
    const geo = await Geo
      .query()
      .where('id', params.id)
      .with('place')
      .first()

    if (geo === null) {
      throw new NotFoundException()
    }

    return response.ok(geo)
  }
}

module.exports = GeoController
