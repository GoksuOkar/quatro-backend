require('dotenv').config();
const {Pool} = require('pg');

const pool = new Pool({
  // user: 'me',
  // host: 'localhost',
  // database: 'atelier',
  // port: 5432,
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};