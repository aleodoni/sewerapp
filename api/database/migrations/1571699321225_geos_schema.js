'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GeosSchema extends Schema {
  up () {
    this.create('geos', table => {
      table.increments()
      table
        .integer('place_id')
        .unsigned()
        .references('id')
        .inTable('places')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()
      table.integer('accuracy').notNullable()
      table.integer('altitude').notNullable()
      table.integer('altitudeAccuracy').notNullable()
      table.integer('heading').notNullable()
      table.float('latitude', { precision: 6 }).notNullable()
      table.float('longitude', { precision: 6 }).notNullable()
      table.integer('speed').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('geos')
  }
}

module.exports = GeosSchema
