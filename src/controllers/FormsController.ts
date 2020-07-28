import { Request, Response } from 'express'
import knex from '../database/connection'

class FormsController{
  async index(request: Request, response: Response) {
    const { 
      data, 
      contato_infectado, 
      tosse, 
      febre, 
      falta_ar, 
      calafrio, 
      temperatura 
    } = request.query

    const form = await knex('forms')

    if(!data && !contato_infectado && !tosse && !febre && !falta_ar && !calafrio && !temperatura){
      return response.json(form)
    }

    if(!contato_infectado && !tosse && !febre && !falta_ar && !calafrio && !temperatura) { 
      const formData = await knex('forms').where('data', Number(data))

      return response.json(formData)
    }

    if( !contato_infectado && !tosse && !febre && !falta_ar && !calafrio){
      const formTemperatura = await knex('forms').where('temperatura', '>=', 37.8)

      if(!data){
        return response.json(formTemperatura)
      }

      const TempToday = await knex('forms').where('temperatura', '>=', 37.8).where('data', Number(data))

      return response.json(TempToday)
    }

    if( !tosse && !febre && !falta_ar && !calafrio && !temperatura) {
      const formContato = await knex('forms').where('contato_infectado', '=', true)
      
      if(!data){
        return response.json(formContato)
      }

      const ContatoToday = await knex('forms').where('contato_infectado', '=', true).where('data', Number(data))

      return response.json(ContatoToday)
    }

    if( !contato_infectado && !febre && !falta_ar && !calafrio && !temperatura) {
      const formTosse = await knex('forms').where('tosse', '=', true)

      if(!data){
        return response.json(formTosse)
      }

      const tosseToday = await knex('forms').where('tosse', '=', true).where('data', Number(data))

      return response.json(tosseToday)
    }

    if( !contato_infectado && !tosse && !falta_ar && !calafrio && !temperatura) {
      const formFebre = await knex('forms').where('febre', '=', true)
      
      if(!data){
        return response.json(formFebre)
      }

      const febreToday = await knex('forms').where('febre', '=', true).where('data', Number(data))

      return response.json(febreToday)
    }

    if( !contato_infectado && !tosse && !febre && !calafrio && !temperatura) {
      const formFaltaAr = await knex('forms').where('falta_ar', '=', true)
      
      if(!data){
        return response.json(formFaltaAr)
      }

      const faltaArToday = await knex('forms').where('falta_ar', '=', true).where('data', Number(data))

      return response.json(faltaArToday)
    }

    if( !contato_infectado && !tosse && !febre && !falta_ar && !temperatura) {
      const formCalafrio = await knex('forms').where('calafrio', '=', true)
      
      if(!data){
        return response.json(formCalafrio)
      }

      const calafrioToday = await knex('forms').where('calafrio', '=', true).where('data', Number(data))

      return response.json(calafrioToday)
    }
        
    return response.status(404).json({message:"error"})
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const form = await knex('forms').where('id', id).first();

    if(!form) {
      return response.status(400).json({ message: "Formulario não encontrado" })
    }

    const { user_id } = form

    const user = await knex('users').where('id', user_id).first()

    const {
      nome,
      email,
      cpf,
      matricula
    } = user

    return response.json({
      ...form,
        nome,
        email,
        cpf,
        matricula
    })
  }

  async create(request: Request, response: Response) {
    const select_id = request.params.id

    const user = await knex('users').where('id', select_id).first()
    
    if(!user) {
      return response.status(400).json({ message: "Usuario não encontrado" })
    }

    const { id } = user

    const user_id = id

    const {
      data,
      contato_infectado,
      tosse,
      febre,
      falta_ar,
      calafrio,
      temperatura
    } = request.body

    const form = {
      user_id,
      data,
      contato_infectado,
      tosse,
      febre,
      falta_ar,
      calafrio,
      temperatura
    }

    const insertId = await knex('forms').insert(form)

    const form_id = insertId[0]

    return response.json({
      form_id,
      ...form
    })
  }
}

export default FormsController