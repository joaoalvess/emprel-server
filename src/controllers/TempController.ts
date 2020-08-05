import { Request, Response } from 'express'
import knex from '../database/connection'

class TempController {
  async update(request: Request, response: Response) {
    const { id } = request.params
    const { temperatura } = request.body

    await knex('forms').where('id', id).update({ temperatura: temperatura })

    return response.json({messager: "temperatura atualizada"})
  }
}

export default TempController