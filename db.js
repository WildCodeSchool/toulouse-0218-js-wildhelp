const mysql = require ('mysql');
const connection = mysql createConnetion({
  host : 'localhost',
  user : 'root'
  password : 'toulouse'
  database :'mydb',
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution)
})
//

//
// connection.end()

module.exports = connection
