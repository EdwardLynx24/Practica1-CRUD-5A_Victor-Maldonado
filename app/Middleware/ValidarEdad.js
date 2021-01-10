'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ValidarEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const edad = request.input('edad')
    if(edad>=18){
      await next()
    }
    else{
      return response.status(400).send("Eres menor de edad :C, solo +18")
    }
  }
}

module.exports = ValidarEdad
