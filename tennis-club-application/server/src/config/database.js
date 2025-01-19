// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// // Test database connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Database connected successfully');
//   }
// });

// module.exports = pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tennis_club',
  password: 'tennis_club123', // Your password
  port: 5432,
});

module.exports = { pool };