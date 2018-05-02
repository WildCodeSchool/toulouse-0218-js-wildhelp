const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')

const checkLoggedInUser = (req, res) => {
      console.log(req.body)
  const query = `SELECT * FROM user WHERE email='${req.body.email}' AND password='${req.body.password}'`
  const userConnexion = req.body.email
  const passwordConnexion = req.body.password

  connection.query(query, (error, results) => {
  console.log(results)
    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }
    if (results.length === 0) {
      return res.status(400).json({
        error: 'Identifiant ou mot de passe incorrect'
      })
    }
    if ((results[0].email == userConnexion) && (results[0].password !== passwordConnexion)){
      return res.status(400).json({
        error: 'Identifiant ou mot de passe incorrect'
      })
    }
    console.log(results[0])
    res.json({results})
  })
}

module.exports = checkLoggedInUser
