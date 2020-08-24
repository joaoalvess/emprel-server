import {Request, Response} from 'express'
import knex from '../database/connection'

class Visit {
  async create(request: Request, response: Response) {
    const {
      data,
      infectado,
      contato_infectado,
      tosse,
      febre,
      falta_ar,
      calafrio,
      garganta,
      cabeça,
      corpo,
      olfato,
      paladar,
      temperatura,
      count,
      apto,
      nome, 
      numero, 
      email,
      cpf 
    } = request.body

    const form = {
      user_id: 135,
      data,
      infectado,
      contato_infectado,
      tosse,
      febre,
      falta_ar,
      calafrio,
      garganta,
      cabeça,
      corpo,
      olfato,
      paladar,
      temperatura,
      apto,
      nome, 
      numero, 
      email, 
      matricula: 135,
      count, 
      cpf
    }

    const insertId = await knex('forms').insert(form)

    const form_id = insertId[0]

    return response.json({
      form_id,
      ...form,
    })
  }
}

export default Visit