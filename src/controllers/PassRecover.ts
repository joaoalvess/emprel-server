import { Request, Response } from 'express'
import knex from '../database/connection'
import nodemailer from 'nodemailer'
class PassRecover {
  async show(request: Request, response: Response) {
    const { email, cpf } = request.body

    const user = process.env.USER
    const pass = process.env.PASS

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {user,pass}
    })

    const selectUser = await knex('users').where('email', email).where('cpf', cpf).first()

    if(!selectUser){
      return response.json({messager: "usuario não encontrado"})
    }

    var crypto = require("crypto");
    var code = crypto.randomBytes(3).toString('hex');

    transporter.sendMail({
      from: user,
      to: email, 
      subject: "Recuperação de senha",
      text: `Seu codigo de verificação é ${code}` 
    }).then(info => {
      response.json(code)
    }).catch(error => {
      response.send(error)
    })
  }
}

export default PassRecover