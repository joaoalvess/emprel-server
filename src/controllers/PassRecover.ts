import { Request, Response } from 'express'
import knex from '../database/connection'

class PassRecover {
  async show(request: Request, response: Response) {
    const { email, cpf } = request.body

    const user = await knex('users').where('email', email).where('cpf', cpf).first()

    if(!user){
      return response.json({messager: "usuario não encontrado"})
    }

    var crypto = require("crypto");
    var code = crypto.randomBytes(3).toString('hex');

    response.json(code)
  }
}

export default PassRecover