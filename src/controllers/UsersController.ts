import { Request, Response } from 'express'
import knex from '../database/connection'

class UsersController{
  async show(request: Request, response: Response) {
    const { id } = request.params
    const { data } = request.query

    const forms = await knex('forms').where('user_id', id)

    if(!data){
      return response.json(forms)
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
    } = request.body

    const user = {
      nome,
      email,
      senha,
      cpf,
      matricula,
    }

    const insertId = await knex('users').insert(user)

    const user_id = insertId[0]

    return response.json({
      id: user_id,
      ...user
    })
  }
}

export default UsersController