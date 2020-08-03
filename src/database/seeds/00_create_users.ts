import Knex from 'knex'

export async function seed(knex:Knex) {
  await knex('users').insert([
    { nome: "Eugênio", email: "eugenio", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Eugênio", email: "eugenio2", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Eugênio", email: "eugenio3", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Feitosa", email: "feitosa", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Feitosa", email: "feitosa2", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Feitosa", email: "feitosa3", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Marcos", email: "marcos", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Marcos", email: "marcos2", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Marcos", email: "marcos3", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Erricsson", email: "erricsson", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Erricsson", email: "erricsson2", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Erricsson", email: "erricsson3", senha: "1234", cpf: 74295136468,matricula: 3470 },
  ])
}