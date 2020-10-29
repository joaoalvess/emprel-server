import { Request, Response } from 'express'
import knex from '../database/connection'
import nodemailer from 'nodemailer'

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

    const selectUser = await knex(`${orgao}forms`).where('data', data).whereNot('user_id', 135)

    const teste = await selectUser.map((mapData: any) => mapData.user_id)
    console.log(teste)

    const users = await knex(`${orgao}users`).whereNotIn('id', teste).whereNot('root', true).whereNot('email', 'inativo').orderBy('nome')

    const useremail = await users.map((mapData: any) => mapData.email)

    console.log(users)
    
    transporter.sendMail({
      from: user,
      to: useremail, 
      subject: "Você não respondeu o questionário hoje!",
      html: `<p style="font-size:16px;">Bom dia, <br /><br />Você ainda não preencheu o questionário de sintomas do covid 19 hoje. Caso esteja sem o aplicativo você pode baixa-lo <a href="https://mega.nz/file/mcYD1Qwb#5AUTsg0DwsRtJji6hHTaWJC_8y6WH8-YAvv69mNGNn4"><strong>clicando aqui</strong></a> ou usar a versão web <a href="https://questionarioemprel.web.app/"><strong>clicando aqui</strong></a> caso esteja com algum problema na sua conta entre em contato com o RH.</p>` 
    }).then(info => {
      response.json({
        useremail
      })
    }).catch(error => {
      response.send(error)
    })
  }
}

export default EmailNotSendController