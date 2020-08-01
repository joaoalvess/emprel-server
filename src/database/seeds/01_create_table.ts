import Knex from 'knex'

export async function seed(knex:Knex) {
  await knex('forms').insert([
    { user_id:1, data: "2772020", infectado: false, contato_infectado: false, tosse: false, febre: false, falta_ar: false, calafrio: false, garganta: true, cabeça: false, corpo: true, temperatura: 36.0, apto: true },
    { user_id:1, data: "2872020", infectado: false, contato_infectado: true, tosse: true, febre: false, falta_ar: true, calafrio: false, garganta: true, cabeça: false, corpo: true, temperatura: 37.5, apto: false },
    { user_id:1, data: "2972020", infectado: false, contato_infectado: false, tosse: false, febre: true, falta_ar: true, calafrio: true, garganta: true, cabeça: false, corpo: true, temperatura: 38.0, apto: false },
    { user_id:4, data: "2772020", infectado: false, contato_infectado: false, tosse: false, febre: false, falta_ar: false, calafrio: false, garganta: true, cabeça: false, corpo: true, temperatura: 36.0, apto: true },
    { user_id:4, data: "2872020", infectado: false, contato_infectado: true, tosse: true, febre: false, falta_ar: true, calafrio: false, garganta: true, cabeça: false, corpo: true, temperatura: 37.5, apto: false },
    { user_id:4, data: "2972020", infectado: false, contato_infectado: false, tosse: false, febre: true, falta_ar: true, calafrio: true, garganta: true, cabeça: false, corpo: true, temperatura: 38.0, apto: false },
    { user_id:7, data: "2772020", infectado: false, contato_infectado: false, tosse: false, febre: false, falta_ar: false, calafrio: false, garganta: true, cabeça: false, corpo: true, temperatura: 36.0, apto: true },
    { user_id:7, data: "2872020", infectado: false, contato_infectado: true, tosse: true, febre: false, falta_ar: true, calafrio: false, garganta: true, cabeça: false, corpo: true, temperatura: 37.5, apto: false },
    { user_id:7, data: "2972020", infectado: false, contato_infectado: false, tosse: false, febre: true, falta_ar: true, calafrio: true, garganta: true, cabeça: false, corpo: true, temperatura: 38.0, apto: false },
  ])
}