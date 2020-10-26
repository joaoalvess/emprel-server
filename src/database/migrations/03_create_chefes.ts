import Knex from "knex"

export async function up(knex: Knex) {
  return knex.schema.createTable("emprelsubordinados", table => {
    table.increments("id").primary();
    table.specificType('subordinados', 'INT[]')
    table.integer("user_id").notNullable().references("id").inTable("emprelusers")
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("emprelsubordinados")
}