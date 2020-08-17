import { Request, Response } from 'express'
import knex from '../database/connection'
import nodemailer from 'nodemailer'
class PassRecover {
  async show(request: Request, response: Response) {
    const { email, cpf } = request.body

    const user = process.env.USER
    const pass = process.env.PASS

    const selectUser = await knex('users').where('email', email).where('cpf', cpf).first()

    if(!selectUser){
      return response.json({messager: "usuario não encontrado"})
    }

    var crypto = require("crypto");
    var code = crypto.randomBytes(3).toString('hex');

    response.json({user,pass})
  }
}

export default PassRecover