'use strict'
const Database = use('Database')

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
        const persona = await Database
        .table('personas')
        .insert({nombre:'Eduardo',apellido_Paterno:'Maldonado',apellido_Materno:'Machuca',edad:'22',sexo:'Masculino',correo:'eduardodarkar02@gmail.com',password:'Edwardcr2'})
        .returning('id')
    }
}
module.exports = PersonaController
