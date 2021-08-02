const { Pool } = require('pg')

const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'squaddb',
  password: 'password',
  port: 5430
});

pool.query('SELECT * FROM squad', (err, res) => {
  if (err) return console.log(err);

  console.log(res);
})