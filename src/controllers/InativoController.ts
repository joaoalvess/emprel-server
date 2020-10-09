import { Request, Response } from 'express'
import knex from '../database/connection'

class InativoController {
  async update(request: Request, response: Response) {
    const { id } = request.params
    const orgao = request.params.orgao

    const { nome, email, matricula, numero } = await knex(`${orgao}users`).where('id', id).first()

    const user = {
      id,
      nome,
      email,
      matricula,
      numero
    }

    await knex(`${orgao}inativos`).insert(user)

    return response.json({messager: "Usuario Inativado"})
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params
    const orgao = request.params.orgao

    await knex(`${orgao}inativos`).where('user_id', id).del()

    return response.json({messager: "Usuario Reativado"})
  }
}

export default InativoController