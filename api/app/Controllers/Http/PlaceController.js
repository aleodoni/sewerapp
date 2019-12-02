'use strict'

const Place = use('App/Models/Place')

class PlaceController {
  async index ({ auth, response }) {
    const places = await Place.query().orderBy('name').fetch()

    return response.ok(places)
  }

  async show ({ params, auth, response }) {
    const place = await Place.findOrFail(params.id)

    return response.ok(place)
  }

  async store ({ auth, request, response }) {
    const data = request.only(['name'])

    const place = await Place.create(data)

    return response.ok(place)
  }

  async update ({ params, auth, request, response }) {
    const data = request.only(['name'])

    const place = await Place.findOrFail(params.id)

    place.merge(data)
    await place.save()

    return response.ok(place)
  }

  async delete ({ params, auth, response }) {
    const place = await Place.findOrFail(params.id)

    await place.delete()

    return response.ok(place)
  }
}

module.exports = PlaceController
