import { Request, Response } from 'express'
import knex from '../database/connection'

class UsersController{
  async updateNome(request: Request, response: Response) {
    const { id } = request.params
    const { nome } = request.body

    await knex('users').where('id', id).update({ nome: nome })

    return response.json({messager: "nome atualizada"})
  }
  async updateMatricula(request: Request, response: Response) {
    const { id } = request.params
    const { matricula } = request.body

    await knex('users').where('id', id).update({ matricula: matricula })

    return response.json({messager: "matricula atualizada"})
  }
  async updateEmail(request: Request, response: Response) {
    const { id } = request.params
    const { email } = request.body

    await knex('users').where('id', id).update({ email: email })

    return response.json({messager: "email atualizada"})
  }
  async updateNumber(request: Request, response: Response) {
    const { id } = request.params
    const { numero } = request.body

    await knex('users').where('id', id).update({ numero: numero })

    return response.json({messager: "numero atualizada"})
  }
  async updateCpf(request: Request, response: Response) {
    const { id } = request.params
    const { cpf } = request.body

    await knex('users').where('id', id).update({ cpf: cpf })

    return response.json({messager: "cpf atualizada"})
  }
  async show(request: Request, response: Response) {
    const { id } = request.params
    const { data } = request.query

    const {nome, email, cpf, matricula, numero} = await knex('users').where('id', id).first()
    const forms = await knex('forms').where('user_id', id)

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

    const userData = await knex('forms').where('user_id', id).where('data', Number(data)).distinct()

    return response.json(userData)
  }
  
  async index(request: Request, response: Response) {
    const { nome, email, cpf, matricula } = request.query

    const userName = await knex('users').where('nome', String(nome))

    const userEmail = await knex('users').where('email', String(email)).first()

    const userCpf = await knex('users').where('cpf', Number(cpf)).first()

    const userMatricula = await knex('users').where('matricula', Number(matricula)).first()

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

    const insertId = await knex('users').insert(user)

    const user_id = insertId[0]

    return response.json({
      id: user_id,
      ...user
    })
  }

  async delete(request: Request, response: Response) {
    const {id} = request.params

    await knex('users').where('id', id).delete()

    return response.json({messager: "usuario deletado"})
  }
}

export default UsersController