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
}
module.exports = PersonaController
