import { Request, Response } from 'express'
import knex from '../database/connection'

class FormsController{
  async indexInativos(request: Request, response: Response) {
    const orgao = request.params.orgao

    const users = await knex(`${orgao}inativos`).orderBy('nome')

    return response.json(users)
  }

  async indexNotSend(request: Request, response: Response) {
    const id = request.body.id
    const orgao = request.params.orgao

    const test = id

    const users = await knex(`${orgao}users`).whereNotIn('id', test).whereNot('email', 'inativo').orderBy('nome')

    return response.json(users)
  }

  async indexInapto(request: Request, response: Response) {
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

    const select = request.query.select
    const selectDate = request.query.selectDate
    const orgao = request.params.orgao

    switch (select) {
      case "data":
        const filterData = await knex(`${orgao}forms`).where('data', String(selectDate)).where('apto', false)
        response.json(filterData)
      break
      case "infectado":
        const filterInfectado = await knex(`${orgao}forms`).where('infectado', Boolean(infectado)).where('data', String(selectDate)).where('apto', false)
        response.json(filterInfectado)
      break
      case "contato_infectado":
        const filterContato = await knex(`${orgao}forms`).where('contato_infectado', Boolean(contato_infectado)).where('data', String(selectDate)).where('apto', false)
        response.json(filterContato)
      break
      case "tosse":
        const filterTosse = await knex(`${orgao}forms`).where('tosse', Boolean(tosse)).where('data', String(selectDate)).where('apto', false)
        response.json(filterTosse)
      break
      case "febre":
        const filterFebre = await knex(`${orgao}forms`).where('febre', Boolean(febre)).where('data', String(selectDate)).where('apto', false)
        response.json(filterFebre)
      break
      case "falta_ar":
        const filterFalta_ar= await knex(`${orgao}forms`).where('falta_ar', Boolean(falta_ar)).where('data', String(selectDate)).where('apto', false)
        response.json(filterFalta_ar)
      break
      case "calafrio":
        const filterCalafrio= await knex(`${orgao}forms`).where('calafrio', Boolean(calafrio)).where('data', String(selectDate)).where('apto', false)
        response.json(filterCalafrio)
      break
      case "garganta":
        const filterGarganta = await knex(`${orgao}forms`).where('garganta', Boolean(garganta)).where('data', String(selectDate)).where('apto', false)
        response.json(filterGarganta)
      break
      case "cabeça":
        const filterCabeça = await knex(`${orgao}forms`).where('cabeça', Boolean(cabeça)).where('data', String(selectDate)).where('apto', false)
        response.json(filterCabeça)
      break
      case "corpo":
        const filterCorpo = await knex(`${orgao}forms`).where('corpo', Boolean(corpo)).where('data', String(selectDate)).where('apto', false)
        response.json(filterCorpo)
      break
      case "olfato":
        const filterOlfato = await knex(`${orgao}forms`).where('olfato', Boolean(olfato)).where('data', String(selectDate)).where('apto', false)
        response.json(filterOlfato)
      break
      case "paladar":
        const filterPaladar = await knex(`${orgao}forms`).where('paladar', Boolean(paladar)).where('data', String(selectDate)).where('apto', false)
        response.json(filterPaladar)
      break
      case "temperatura":
        const filterTemperatura = await knex(`${orgao}forms`).where('temperatura', '>=', 37.2).where('data', String(selectDate)).where('apto', false)
        response.json(filterTemperatura)
      break
      default:
        const filterAll = await knex(`${orgao}forms`).where('apto', false)
        response.json(filterAll)
      break
    }
  }

  async indexSelect(request: Request, response: Response) {
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

    const select = request.query.select
    const selectDate = request.query.selectDate
    const orgao = request.params.orgao

    switch (select) {
      case "data":
        const filterData = await knex(`${orgao}forms`).where('data', String(selectDate)).whereNot('user_id', 135).orderBy('nome')
        response.json(filterData)
      break
      case "infectado":
        const filterInfectado = await knex(`${orgao}forms`).where('infectado', Boolean(infectado)).where('data', String(selectDate))
        response.json(filterInfectado)
      break
      case "contato_infectado":
        const filterContato = await knex(`${orgao}forms`).where('contato_infectado', Boolean(contato_infectado)).where('data', String(selectDate))
        response.json(filterContato)
      break
      case "tosse":
        const filterTosse = await knex(`${orgao}forms`).where('tosse', Boolean(tosse)).where('data', String(selectDate))
        response.json(filterTosse)
      break
      case "febre":
        const filterFebre = await knex(`${orgao}forms`).where('febre', Boolean(febre)).where('data', String(selectDate))
        response.json(filterFebre)
      break
      case "falta_ar":
        const filterFalta_ar= await knex(`${orgao}forms`).where('falta_ar', Boolean(falta_ar)).where('data', String(selectDate))
        response.json(filterFalta_ar)
      break
      case "calafrio":
        const filterCalafrio= await knex(`${orgao}forms`).where('calafrio', Boolean(calafrio)).where('data', String(selectDate))
        response.json(filterCalafrio)
      break
      case "garganta":
        const filterGarganta = await knex(`${orgao}forms`).where('garganta', Boolean(garganta)).where('data', String(selectDate))
        response.json(filterGarganta)
      break
      case "cabeça":
        const filterCabeça = await knex(`${orgao}forms`).where('cabeça', Boolean(cabeça)).where('data', String(selectDate))
        response.json(filterCabeça)
      break
      case "corpo":
        const filterCorpo = await knex(`${orgao}forms`).where('corpo', Boolean(corpo)).where('data', String(selectDate))
        response.json(filterCorpo)
      break
      case "olfato":
        const filterOlfato = await knex(`${orgao}forms`).where('olfato', Boolean(olfato)).where('data', String(selectDate))
        response.json(filterOlfato)
      break
      case "temperatura":
        const filterTemperatura = await knex(`${orgao}forms`).where('temperatura', Number(30.2)).where('data', String(selectDate))
        response.json(filterTemperatura)
      break
      case "paladar":
        const filterPaladar = await knex(`${orgao}forms`).where('paladar', Boolean(paladar)).where('data', String(selectDate))
        response.json(filterPaladar)
      break
      case "visitante":
        const filterVisitante = await knex(`${orgao}forms`).where('user_id', 135).where('data', String(selectDate))
        response.json(filterVisitante)
      break
      case "sintomas":
        const filterSintomas = await knex(`${orgao}forms`)
          .where('paladar', true)
          .orWhere('olfato', true)
          .orWhere('corpo', true)
          .orWhere('cabeça', true)
          .orWhere('garganta', true)
          .orWhere('calafrio', true)
          .orWhere('falta_ar', true)
          .orWhere('febre', true)
          .orWhere('tosse', true)
          .orWhere('contato_infectado', true)
          .where('data', String(selectDate))

        response.json(filterSintomas)
      break
      default:
        const filterDataDefault = await knex(`${orgao}forms`).where('data', String(selectDate))
        response.json(filterDataDefault)
      break
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params
    const orgao = request.params.orgao

    const form = await knex(`${orgao}forms`).where('id', id).first();

    if(!form) {
      return response.status(400).json({ message: "Formulario não encontrado" })
    }

    const { user_id } = form

    const user = await knex(`${orgao}users`).where('id', user_id).first()

    return response.json({
      ...form,
      ...user
    })
  }

  async create(request: Request, response: Response) {
    const select_id = request.params.id
    const orgao = request.params.orgao

    const user = await knex(`${orgao}users`).where('id', select_id).first()
    
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

    const insertId = await knex(`${orgao}forms`).insert(form)

    const form_id = insertId[0]

    return response.json({
      form_id,
      ...form,
    })
  }
}

export default FormsController