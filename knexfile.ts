import path from 'path'

module.exports = {
  client: 'pg',
  connection: process.env.HEROKU_POSTGRESQL_COPPER_URL,
  migrations: {
     directory: path.resolve(__dirname, 'src', 'database',  'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database',  'seeds')
 },
  useNullAsDefault: true
}