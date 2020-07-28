import { Request, Response } from 'express'
import knex from '../database/connection'

class TodayController {
  async show(request: Request, response: Response) {
    const { id } = request.params
    const { data } = request.query

    const forms = await knex('forms').where('user_id', id).where('data', String(data))

    if(!forms) {
      return response.status(404).json({messager: "error"})
    }

    const otario = console.log('otario')

    return response.json({
      ...forms,
      otario
    })
  }
}

export default TodayController