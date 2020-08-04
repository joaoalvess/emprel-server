import { Request, Response } from 'express'
import knex from '../database/connection'

class PerfilController {
  async show(request: Request, response: Response) {
    const { id } = request.params

    const user = await knex('users').where('id', id).first()

    return response.json(user)
  }
  async update(request: Request, response: Response) {
    const { id } = request.params
    const { senha } = request.body

    await knex('users').where('id', id).update({ senha: senha })

    return response.json({messager: "senha atualizada"})
  }
}

export default PerfilController