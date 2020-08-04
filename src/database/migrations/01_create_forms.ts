import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('forms', table => {
    table.increments('id').primary();
    table.boolean('infectado').notNullable()
    table.boolean('contato_infectado').notNullable()
    table.string('data').notNullable()
    table.boolean('tosse').notNullable()
    table.boolean('febre').notNullable()
    table.boolean('falta_ar').notNullable()
    table.boolean('calafrio').notNullable()
    table.boolean('garganta').notNullable()
    table.boolean('cabeça').notNullable()
    table.boolean('corpo').notNullable()
    table.boolean('olfato').notNullable()
    table.boolean('paladar').notNullable()
    table.boolean('apto').notNullable()
    table.decimal('temperatura').notNullable()

    table.integer('user_id').notNullable().references('id').inTable('users')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('forms')
}