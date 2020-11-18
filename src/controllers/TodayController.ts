import { Request, Response } from 'express'
import knex from '../database/connection'

class TodayController {
  async show(request: Request, response: Response) {
    const { id } = request.params
    const { data } = request.query
    const orgao = request.params.orgao

    const forms = await knex(`${orgao}forms`).where('user_id', id).where('data', String(data)).first()

    if(!forms) {
      return response.status(404).json({messager: "error"})
    }

    return response.json({
      ...forms
    })
  }
}

export default TodayController