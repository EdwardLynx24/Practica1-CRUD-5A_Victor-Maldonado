'use strict'
const Database = use('Database')
const Persona = use ('App/Models/Persona')

class PersonaController {
    async selectPersons(){
        return await Database.select('*').from('personas')
    }
    async selectPerson({request, response}){
        const id = request.only('id')
        //return id
        return await Database.select('*').from('personas').where({id: id['id']})
    }
    async insertPersons({request, response}){
        const {nombre, apellido_paterno, apellido_Materno, edad, sexo, correo, password}=request.all()
        const personaNueva = new Persona()
        personaNueva.fill({
            nombre,
            apellido_paterno,
            apellido_Materno,
            edad,
            sexo,
            correo,
            password
        })
        await personaNueva.save()
        return response.status(204).send("Persona ingresada papi")
        /*const persona = await Database
        .table('personas')
        .insert({nombre:'Eduardo',apellido_Paterno:'Maldonado',apellido_Materno:'Machuca',edad:'22',sexo:'Masculino',correo:'eduardodarkarDCR@gmail.com',password:'Edwardcr2'})
        .returning('id')*/
    }
}
module.exports = PersonaController
