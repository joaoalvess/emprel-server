import { Request, Response } from 'express'
import knex from '../database/connection'

class InativoController {
  async index(request: Request, response: Response) {
    const orgao = request.params.orgao

    const users = await knex(`${orgao}users`).where('email', 'inativo').whereNot('root', true).orderBy('nome')

    return response.json(users)
  }

  async create(request: Request, response: Response) {
    const { id } = request.params
    const orgao = request.params.orgao

    await knex(`${orgao}users`).where('id', id).update({ root: true })

    return response.json({messager: "Usuario Inativado"})
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params
    const orgao = request.params.orgao

    await knex(`${orgao}users`).where('id', id).update({ root: false })

    return response.json({messager: "Usuario Reativado"})
  }
}

export default InativoController