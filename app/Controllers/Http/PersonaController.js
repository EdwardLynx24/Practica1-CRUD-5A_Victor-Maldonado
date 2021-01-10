'use strict'
const Database = use('Database')
const Persona = use ('App/Models/Persona')
const { validate } = use('Validator')

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
        const rules ={
            correo: 'required|email',
            password: 'required'
        }
        const aceptado = await validate(request.all(),rules)
        if (aceptado.fails()){
            return response.status(400).send("Ponga bien sus cosas.")
        }
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
    async updatePerson({request, response}){
        const id_persona = request.input('id')
        const nombre_persona = request.input('nombre')
        const nombreUpd = await Persona.find(id_persona)
        nombreUpd.nombre=nombre_persona
        await nombreUpd.save()
        return response.status(200).send("Listo")
    }
    async deletePerson({request,response}){
        const id_persona = request.input('id')
        const personaD = await Persona.find(id_persona)
        personaD.delete()
        return response.status(200).send("Que  feo lo borraste :c")
    }
}
module.exports = PersonaController
