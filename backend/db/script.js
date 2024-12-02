// Basic script from https://expressjs.com/en/guide/database-integration.html#mysql
const mysql = require('mysql')
const connection = mysql.createConnection({
  /*host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'*/

  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fishingblog471'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
// end of snippet