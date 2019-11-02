'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlacesSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments()
      table.string('name', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlacesSchema
