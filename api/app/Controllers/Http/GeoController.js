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

  async store ({ request, response }) {
    const data = request.only([
      'accuracy',
      'altitude',
      'altitudeAccuracy',
      'heading',
      'latitude',
      'longitude',
      'speed'
    ])

    const geo = await Geo.create(data)

    return response.ok(geo)
  }

  async update ({ params, request, response }) {
    const data = request.only(['place_id'])

    const geo = await Geo.findOrFail(params.id)

    geo.merge(data)
    await geo.save()

    return response.ok(geo)
  }

  async delete ({ params, response }) {
    const geo = await Geo.findOrFail(params.id)

    await geo.delete()

    return response.ok({})
  }
}

module.exports = GeoController
