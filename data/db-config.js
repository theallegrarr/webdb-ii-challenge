const knex = require('knex')

const config = require('../knexfile')
require('dotenv').config();

module.exports = knex(config[process.env.NODE_ENV])