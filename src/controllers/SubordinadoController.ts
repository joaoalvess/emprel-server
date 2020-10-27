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

    const forms = await knex(`${orgao}forms`).select('user_id').whereIn('user_id', teste).where('data', String(data))

    const alo = forms.toString()

    const alo2 = forms[1]

    const alo3 = [alo]

    console.log(alo)
    console.log(alo2)
    console.log(alo3)

    const sub = await knex(`${orgao}users`).whereIn('id', teste).whereNotIn('id', alo3)
    
    console.log(sub)
    
    var crypto = require("crypto");
    var code = crypto.randomBytes(3).toString('hex');

    transporter.sendMail({
      from: user,
      to: email, 
      subject: "Recuperação de senha",
      html: `<p style="font-size:18px;">Seu codigo de verificação é <strong>${code}</strong></p>` 
    }).then(info => {
      response.json({
        forms,
        sub
      })
    }).catch(error => {
      response.send(error)
    })
  }
}

export default PassRecover