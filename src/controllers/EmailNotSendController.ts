import { Request, Response } from 'express'
import knex from '../database/connection'
import nodemailer from 'nodemailer'

interface Data {
  data: string;
  infectado: boolean;
  contato_infectado: boolean;
  tosse: boolean;
  febre: boolean;
  falta_ar: boolean;
  calafrio: boolean;
  corpo: boolean;
  cabeça: boolean;
  garganta: boolean;
  apto: boolean;
  temperatura: string;
  id: number;
  email: string;
  matricula: number;
  nome: string;
  numero: number;
  cpf: string;
  user_id: '{}';
  count: number;
}

class EmailNotSendController {
  async show(request: Request, response: Response) {
    const orgao = request.params.orgao

    const user = process.env.USER
    const pass = process.env.PASS
    const email = 'jp14700@gmail.com'

    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const data = `${day}${month}${year}`

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {user,pass}
    })

    const selectUser = await knex(`${orgao}forms`).where('data', data).whereNot('user_id', 135).then((res: any) => {
      const teste = res.data.map((mapData: any) => mapData.user_id);
      console.log(teste)
      const id = { id: teste }
      console.log(id)
    })
    

    const users = await knex(`${orgao}users`).whereNotIn('id', [1,2,3]).whereNot('root', true).whereNot('email', 'inativo').orderBy('nome')

    console.log(selectUser)
    
    var crypto = require("crypto");
    var code = crypto.randomBytes(3).toString('hex');

    transporter.sendMail({
      from: user,
      to: email, 
      subject: "Recuperação de senha",
      html: `<p style="font-size:18px;">Seu codigo de verificação é <strong>${code}</strong></p>` 
    }).then(info => {
      response.json({
        selectUser
      })
    }).catch(error => {
      response.send(error)
    })
  }
}

export default EmailNotSendController