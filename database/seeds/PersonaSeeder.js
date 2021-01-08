'use strict'
const Factory = use('Factory')
const Database = use('Database')
/*
|--------------------------------------------------------------------------
| PersonaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
/** @type {import('@adonisjs/lucid/src/Factory')} */
class PersonaSeeder {
  async run () {
    const persona = await Factory.model('App/Models/Persona').createMany(10)
    await Database.table('personas')
    console.log(persona)
  }
}
module.exports = PersonaSeeder
