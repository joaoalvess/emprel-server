import { Request, Response } from 'express'
import knex from '../database/connection'

class UserAuthController {
  async show(request : Request, response: Response) {
    const {
      email,
      senha,
    } = request.query

    const auth = await knex('users').where('email', String(email)).where('senha', String(senha)).distinct().first()

    if(!auth) {
      return response.status(404).json({messager: "error"})
    }

    return response.json({...auth})
  }
}

export default UserAuthController