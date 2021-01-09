'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonaSchema extends Schema {
  up () {
    this.create('personas', (table) => {
      table.increments()
      table.string('nombre',255).notNullable()
      table.string('apellido_paterno', 255).notNullable()
      table.string('apellido_materno', 255).notNullable()
      table.integer('edad').notNullable()
      table.string('sexo').notNullable()
      table.string('correo').notNullable().unique()
      table.string('password').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('personas')
  }
}

module.exports = PersonaSchema
