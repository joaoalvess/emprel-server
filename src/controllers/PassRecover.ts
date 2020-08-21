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
      return response.status(404).json({ message: "Usuario não encontrado" })
    }

    const { matricula } = selectUser
    
    var crypto = require("crypto");
    var code = crypto.randomBytes(3).toString('hex');

    transporter.sendMail({
      from: user,
      to: email, 
      subject: "Recuperação de senha",
      html: `<p style="font-size:18px;">Seu codigo de verificação é <strong>${code}</strong></p>` 
    }).then(info => {
      response.json({
        matricula,
        code
      })
    }).catch(error => {
      response.send(error)
    })
  }
}

export default PassRecover