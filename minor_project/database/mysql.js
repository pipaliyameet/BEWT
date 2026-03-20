const { createPool } = require('mysql2/promise');

const db = createPool({
  host: 'localhost',
  user: 'root',
  password: '13971672',
  database: 'movie_app',
  connectionLimit: 10
});

module.exports = db;