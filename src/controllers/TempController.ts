import { Request, Response } from 'express'
import knex from '../database/connection'

class TempController {
  async update(request: Request, response: Response) {
    const { id } = request.params
    const { temperatura, apto } = request.body
    const orgao = request.params.orgao

    if(apto == true) {
      await knex(`${orgao}forms`).where('id', id).update({ temperatura: temperatura })
    }
    if(apto == false) {
      await knex(`${orgao}forms`).where('id', id).update({ temperatura: temperatura, apto: apto })
    }

    return response.json({messager: "temperatura atualizada"})
  }
}

export default TempController