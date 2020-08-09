import { Request, Response } from 'express'
import knex from '../database/connection'

class UserNotToday {
  async show(request: Request, response: Response) {
    const { data } = request.body

    const forms = await knex('forms').where('data', String(data))

    if(!forms) {
      return response.status(404).json({messager: "error"})
    }

    const users = await knex('users')
      .join('forms', 'users.id', '=',  'forms.user_id')
      .where('forms.user_id', 'user.id')

    return response.json({
      ...users
    })
  }
}

export default UserNotToday