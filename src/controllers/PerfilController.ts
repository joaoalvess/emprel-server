import { Request, Response } from 'express'
import knex from '../database/connection'

class PerfilController {
  async show(request: Request, response: Response) {
    const { id, nome } = request.params

    const user = await knex('users').where('id', id).first()

    return response.json(user)
  }
}

export default PerfilController