import Knex from "knex"

export async function up(knex: Knex) {
  return knex.schema.createTable("inativos", table => {
    table.increments("id").primary();
    table.string("nome")
    table.string("email")
    table.integer("matricula")
    table.integer("numero")
    table.integer("user_id").notNullable().references("id").inTable("users")
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("inativos")
}