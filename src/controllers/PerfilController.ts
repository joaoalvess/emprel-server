import { Request, Response } from 'express'
import knex from '../database/connection'

class PerfilController {
  async filterShow(request: Request, response: Response) {
    const { nome } = request.params
    const orgao = request.params.orgao

    const user = await knex(`${orgao}users`).where('nome', nome).first()

    return response.json(user)
  }
  async show(request: Request, response: Response) {
    const { id } = request.params
    const orgao = request.params.orgao

    const user = await knex(`${orgao}users`).where('id', id).first()

    return response.json(user)
  }
  async update(request: Request, response: Response) {
    const { id } = request.params
    const { senha } = request.body
    const orgao = request.params.orgao

    await knex(`${orgao}users`).where('id', id).update({ senha: senha })

    return response.json({messager: "senha atualizada"})
  }
}

export default PerfilController