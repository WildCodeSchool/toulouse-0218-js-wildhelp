const mysql = require ('mysql');
const connection = mysql createConnetion({
  host : 'localhost',
  database :'',
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error
  concole.log('The solution is: '. results[0].solution)
})

connection.end()
