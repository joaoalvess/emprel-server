import Knex from 'knex'

export async function seed(knex:Knex) {
  await knex('users').insert([
    { nome: "Eugênio", email: "eugenio", senha: "1234", cpf: 74295136468,matricula: 3470, url: "https://emprel-storage.s3.amazonaws.com/ae57d3043bc495181edb1b261abcd852-usericon.png" },
    { nome: "Eugênio", email: "eugenio2", senha: "1234", cpf: 74295136468,matricula: 3470, url: "https://emprel-storage.s3.amazonaws.com/ae57d3043bc495181edb1b261abcd852-usericon.png" },
    { nome: "Feitosa", email: "feitosa", senha: "1234", cpf: 74295136468,matricula: 3470, url: "https://emprel-storage.s3.amazonaws.com/ae57d3043bc495181edb1b261abcd852-usericon.png" },
    { nome: "Feitosa", email: "feitosa2", senha: "1234", cpf: 74295136468,matricula: 3470, url: "https://emprel-storage.s3.amazonaws.com/ae57d3043bc495181edb1b261abcd852-usericon.png" },
    { nome: "Marcos", email: "marcos", senha: "1234", cpf: 74295136468,matricula: 3470, url: "https://emprel-storage.s3.amazonaws.com/ae57d3043bc495181edb1b261abcd852-usericon.png" },
    { nome: "Marcos", email: "marcos2", senha: "1234", cpf: 74295136468,matricula: 3470, url: "https://emprel-storage.s3.amazonaws.com/ae57d3043bc495181edb1b261abcd852-usericon.png" },
    { nome: "Erricsson", email: "erricsson", senha: "1234", cpf: 74295136468,matricula: 3470, url: "https://emprel-storage.s3.amazonaws.com/ae57d3043bc495181edb1b261abcd852-usericon.png" },
    { nome: "Erricsson", email: "erricsson2", senha: "1234", cpf: 74295136468,matricula: 3470, url: "https://emprel-storage.s3.amazonaws.com/ae57d3043bc495181edb1b261abcd852-usericon.png" },
  ])
}