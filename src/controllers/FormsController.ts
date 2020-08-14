import { Request, Response } from 'express'
import knex from '../database/connection'

class FormsController{
  async index(request: Request, response: Response) {
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
      olfato,
      paladar,
      corpo
    } = request.query

    const notsend = request.query.inapto
    const inapto = request.query.inapto
    const select = request.query.select
    const selectDate = request.query.selectDate

    if(notsend) {
      const naoEnviado = await knex('forms').where('apto', false).where('data', String(data))
      return response.json(naoEnviado)
    }

    switch (select) {
      case "data":
        const filterData = await knex('forms').where('data', String(selectDate))
        response.json(filterData)
      break
      case "infectado":
        const filterInfectado = await knex('forms').where('infectado', Boolean(infectado)).where('data', String(selectDate))
        response.json(filterInfectado)
      break
      case "contato_infectado":
        const filterContato = await knex('forms').where('contato_infectado', Boolean(contato_infectado)).where('data', String(selectDate))
        response.json(filterContato)
      break
      case "tosse":
        const filterTosse = await knex('forms').where('tosse', Boolean(tosse)).where('data', String(selectDate))
        response.json(filterTosse)
      break
      case "febre":
        const filterFebre = await knex('forms').where('febre', Boolean(febre)).where('data', String(selectDate))
        response.json(filterFebre)
      break
      case "falta_ar":
        const filterFalta_ar= await knex('forms').where('falta_ar', Boolean(falta_ar)).where('data', String(selectDate))
        response.json(filterFalta_ar)
      break
      case "calafrio":
        const filterCalafrio= await knex('forms').where('calafrio', Boolean(calafrio)).where('data', String(selectDate))
        response.json(filterCalafrio)
      break
      case "garganta":
        const filterGarganta = await knex('forms').where('garganta', Boolean(garganta)).where('data', String(selectDate))
        response.json(filterGarganta)
      break
      case "cabeça":
        const filterCabeça = await knex('forms').where('cabeça', Boolean(cabeça)).where('data', String(selectDate))
        response.json(filterCabeça)
      break
      case "corpo":
        const filterCorpo = await knex('forms').where('corpo', Boolean(corpo)).where('data', String(selectDate))
        response.json(filterCorpo)
      break
      case "olfato":
        const filterOlfato = await knex('forms').where('olfato', Boolean(olfato)).where('data', String(selectDate))
        response.json(filterOlfato)
      break
      case "paladar":
        const filterPaladar = await knex('forms').where('paladar', Boolean(paladar)).where('data', String(selectDate))
        response.json(filterPaladar)
      break
      case "temperatura":
        const filterTemperatura = await knex('forms').where('temperatura', '>=', 37.2).where('data', String(selectDate))
        response.json(filterTemperatura)
      break
      default:
        const filterAll = await knex('forms')
        response.json(filterAll)
      break
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const form = await knex('forms').where('id', id).first();

    if(!form) {
      return response.status(400).json({ message: "Formulario não encontrado" })
    }

    const { user_id } = form

    const user = await knex('users').where('id', user_id).first()

    return response.json({
      ...form,
      ...user
    })
  }

  async create(request: Request, response: Response) {
    const select_id = request.params.id

    const user = await knex('users').where('id', select_id).first()
    
    if(!user) {
      return response.status(400).json({ message: "Usuario não encontrado" })
    }

    const { id, nome, numero, email, matricula, cpf } = user

    const user_id = id

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
      apto
    } = request.body

    const form = {
      user_id,
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
      matricula,
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

export default FormsController