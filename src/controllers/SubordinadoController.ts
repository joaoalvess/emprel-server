import { Request, Response } from 'express'
import knex from '../database/connection'
import nodemailer from 'nodemailer'
class PassRecover {
  async create(request: Request, response: Response) {
    const { user_id } = request.params
    const subordinados = request.body.subordinados
    const orgao = request.params.orgao

    const teste = subordinados

    const user = {
      user_id,
      subordinados: [teste]
    }

    const insertId = await knex(`${orgao}subordinados`).insert(user)

    const id = insertId[0]

    return response.json({
      id,
      ...user
    })
  }

  async show(request: Request, response: Response) {
    const { user_id } = request.params
    const orgao = request.params.orgao

    const user = process.env.USER
    const pass = process.env.PASS

    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const data = `${day}${month}${year}`

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {user,pass}
    })

    const chefe = await knex(`${orgao}users`).where('id', user_id).first()

    const { email } = chefe

    const selectUser = await knex(`${orgao}subordinados`).where('user_id', user_id).first()
    
    if(!selectUser){
      return response.status(404).json({ message: "Usuario sem subordinados" })
    }
    
    const teste = selectUser.subordinados[0]

    const forms = await knex(`${orgao}forms`).whereIn('user_id', teste).where('data', String(data))

    const userid = await forms.map((mapData: any) => mapData.user_id)

    console.log(forms)

    const sub = await knex(`${orgao}users`).whereIn('id', teste).whereNotIn('id', userid).whereNot('root', true)
    
    const naoRespondidos = await sub.map((mapData: any) => mapData.nome)
    
    transporter.sendMail({
      from: user,
      to: email, 
      subject: "Acompanhamento Covid-19",
      html: `<p style="font-size:16px;">Bom dia, <br /><br /> Os funcionários(as) ${naoRespondidos} ainda não preencheram o questionário de sintomas do covid 19 hoje. Pedimos sua colaboração no sentido de ratificar junto a seus subordinados a importância do preenchimento diário deste como medida de segurança e prevenção de todos.</p>` 
    }).then(info => {
      response.json({
        sub,
        userid
      })
    }).catch(error => {
      response.send(error)
    })
  }
}

export default PassRecover