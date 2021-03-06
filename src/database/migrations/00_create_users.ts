import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('emprelusers', table => {
    table.increments("id").primary();
    table.string("nome").notNullable()
    table.string("email").notNullable()
    table.string("senha").notNullable()
    table.string("cpf").notNullable()
    table.integer("matricula").notNullable()
    table.integer("numero").notNullable()
    table.boolean("adm").notNullable()
    table.boolean("root").notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('emprelusers')
}