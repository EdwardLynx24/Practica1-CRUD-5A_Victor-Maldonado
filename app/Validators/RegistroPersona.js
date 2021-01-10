'use strict'

class RegistroPersona {
  get rules () {
    return {
        correo: 'required|email',
        password: 'required'
    }
  }
}

module.exports = RegistroPersona
