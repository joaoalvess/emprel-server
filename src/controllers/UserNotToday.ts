import { Request, Response } from 'express'
import knex from '../database/connection'

class UserNotToday {
  async show(request: Request, response: Response) {
    const { id } = request.body
    const orgao = request.params.orgao

    const users = await knex(`${orgao}forms`).whereNotIn('data', [id])

    if(!users) {
      return response.status(404).json({messager: "error"})
    }

    return response.json(users)
  }
}

export default UserNotToday