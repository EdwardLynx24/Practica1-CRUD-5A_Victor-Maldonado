'use strict'
const Factory = use('Factory')
const Hash = use('Hash')

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
//Factory Persona
Factory.blueprint('App/Models/Persona', (faker) =>{
    return{
        nombre: faker.name(),
        apellido_paterno: faker.first(),
        apellido_materno: faker.last(),
        edad: faker.age(18,54),
        sexo: faker.gender(),
        correo: faker.email(),
        password: faker.word()
    }
})

