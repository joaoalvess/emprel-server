import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('forms', table => {
    table.increments('id').primary();
    table.boolean('contato_infectado')
    table.string('data')
    table.boolean('tosse')
    table.boolean('febre')
    table.boolean('falta_ar')
    table.boolean('calafrio')
    table.decimal('temperatura')

    table.integer('user_id').notNullable().references('id').inTable('users')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('forms')
}