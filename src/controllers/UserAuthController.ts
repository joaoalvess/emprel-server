import { Request, Response } from 'express'
import knex from '../database/connection'

class UserAuthController {
  async show(request : Request, response: Response) {
    const {
      cpf,
      senha,
    } = request.query

    const auth = await knex('users').where('email', String(cpf)).where('senha', String(senha)).first()

    if(!auth) {
      return response.status(404).json({messager: "Usuario ou senha incorreto"})
    }

    return response.json({...auth})
  }
}

export default UserAuthController