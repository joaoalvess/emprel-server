import Knex from 'knex'

export async function seed(knex:Knex) {
  await knex('users').insert([
    { nome: "Feitosa", email: "feitosa", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Feitosa", email: "feitosa2", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Feitosa", email: "feitosa3", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Marcos", email: "marcos", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Marcos", email: "marcos2", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Marcos", email: "marcos3", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Erickson", email: "erickson", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Erickson", email: "erickson2", senha: "1234", cpf: 74295136468,matricula: 3470 },
    { nome: "Erickson", email: "erickson3", senha: "1234", cpf: 74295136468,matricula: 3470 },
  ])
}