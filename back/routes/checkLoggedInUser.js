const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')
// const session = require('express-session')
// app.use(session({secret:"cats", resave:true, saveUninitialized: true}))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

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
