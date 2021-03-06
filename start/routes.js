'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.group(()=>{
  Route.get('/select/persons','PersonaController.selectPersons')
  Route.get('/select/person/id/:id?','PersonaController.selectPerson')
  Route.post('/insert/person','PersonaController.insertPersons').validator('RegistroPersona').middleware(['edad'])
  Route.post('/update/person/name','PersonaController.updatePerson')
  Route.delete('/delete/person','PersonaController.deletePerson')
}).prefix('api/v1')


