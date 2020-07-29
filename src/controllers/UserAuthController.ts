import { Request, Response } from 'express'
import knex from 'knex'


class UserAuthController {
  async show(request : Request, response: Response) {
    const {
      email,
      senha,
    } = request.query

    const auth = await knex('users').where('email', String(email)).where('senha', String(senha))

    return response.json(auth)
  }
}

export default UserAuthController