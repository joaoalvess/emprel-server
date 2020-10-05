import { Request, Response } from 'express'
import knex from '../database/connection'

class UsersController{
  async updateNome(request: Request, response: Response) {
    const { id } = request.params
    const { nome } = request.body
    const orgao = request.params.orgao

    await knex(`${orgao}users`).where('id', id).update({ nome: nome })

    return response.json({messager: "nome atualizada"})
  }
  async updateMatricula(request: Request, response: Response) {
    const { id } = request.params
    const { matricula } = request.body
    const orgao = request.params.orgao

    await knex(`${orgao}users`).where('id', id).update({ matricula: matricula })

    return response.json({messager: "matricula atualizada"})
  }
  async updateEmail(request: Request, response: Response) {
    const { id } = request.params
    const { email } = request.body
    const orgao = request.params.orgao

    await knex(`${orgao}users`).where('id', id).update({ email: email })

    return response.json({messager: "email atualizada"})
  }
  async updateNumber(request: Request, response: Response) {
    const { id } = request.params
    const { numero } = request.body
    const orgao = request.params.orgao

    await knex(`${orgao}users`).where('id', id).update({ numero: numero })

    return response.json({messager: "numero atualizada"})
  }
  async updateCpf(request: Request, response: Response) {
    const { id } = request.params
    const { cpf } = request.body
    const orgao = request.params.orgao

    await knex(`${orgao}users`).where('id', id).update({ cpf: cpf })

    return response.json({messager: "cpf atualizada"})
  }
  async show(request: Request, response: Response) {
    const { id } = request.params
    const { data } = request.query
    const orgao = request.params.orgao

    const {nome, email, cpf, matricula, numero} = await knex(`${orgao}users`).where('id', id).first()
    const forms = await knex(`${orgao}forms`).where('user_id', id).orderBy('data', "desc")

    if(!data){
      return response.json({
        nome,
        email,
        cpf,
        matricula,
        numero,
        forms
      })
    }

    const userData = await knex(`${orgao}forms`).where('user_id', id).where('data', Number(data)).distinct()

    return response.json(userData)
  }
  
  async index(request: Request, response: Response) {
    const { nome, email, cpf, matricula } = request.query
    const orgao = request.params.orgao

    const userName = await knex(`${orgao}users`).where('nome', String(nome))

    const userEmail = await knex(`${orgao}users`).where('email', String(email)).first()

    const userCpf = await knex(`${orgao}users`).where('cpf', Number(cpf)).first()

    const userMatricula = await knex(`${orgao}users`).where('matricula', Number(matricula)).first()

    return response.json({
      userName,
      userEmail,
      userCpf,
      userMatricula
    })
  }

  async create(request : Request, response: Response) {
    const {
      nome,
      email,
      senha,
      cpf,
      matricula,
      numero
    } = request.body
    const orgao = request.params.orgao

    const user = {
      nome,
      email,
      senha,
      cpf,
      matricula,
      numero,
      adm: false,
      root: false
    }

    const insertId = await knex(`${orgao}users`).insert(user)

    const user_id = insertId[0]

    return response.json({
      id: user_id,
      ...user
    })
  }

  async delete(request: Request, response: Response) {
    const {id} = request.params
    const orgao = request.params.orgao

    await knex(`${orgao}forms`).where('user_id', id).del()

    await knex(`${orgao}users`).where('id', id).del()

    return response.json({messager: "usuario deletado"})
  }
}

export default UsersController