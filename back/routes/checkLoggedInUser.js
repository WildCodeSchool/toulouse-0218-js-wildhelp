const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')

// const middleware = (req, res, next) => {
//   console.log ('Tentative de connexion, passage du middleware')
//   next()
// }
// app.use(middleware)

const checkLoggedInUser = (req,res) => {
  const {email, password} = req.body
  console.log(req.body)
  if (!email || !password){
    return res.status(400).json({error: 'champs non remplis'})
  }

  const userConnexion = `SELECT * FROM user WHERE email='${req.body.email}' AND password='${req.body.password}'`

  connection.query(userConnexion, (error, results, fields) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }

    res.json(results[0])
  })
}
module.exports = checkLoggedInUser
