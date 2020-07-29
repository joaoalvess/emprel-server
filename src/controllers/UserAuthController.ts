import { Request, Response } from 'express'
import knex from 'knex'


class UserAuthController {
  async show(request : Request, response: Response) {
    const {
      email,
      senha,
    } = request.body

    const auth = await knex('users').where('email', email).where('senha', senha)


    return response.json(auth)
  }
}

export default UserAuthController