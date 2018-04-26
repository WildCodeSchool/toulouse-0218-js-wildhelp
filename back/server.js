const express = require('express')
// Module path: manipulation des chemins de fichiers
const path = require('path')
const app = express()

const session = require('express-session')
app.use(session({secret:"cats", resave:true, saveUninitialized: true}))
// Je veux public qui est à ../public
// Avec node, je ne peux pas mettre qqchose comme:
// /home/wilder/projet2/wildhelp/back/../public
// path.normalize va transformer
// /home/wilder/projet2/wildhelp/back/../public
// /home/wilder/projet2/wildhelp/public
const staticPath = path.normalize(`${__dirname}/../public`)
app.use(express.static(staticPath))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const middleware = (req, res, next) => {
  console.log ('Tentative de connexion, passage du middleware')
  next()
}
app.use(middleware)

const user = [
  { email: 'test@gmail.com', password: 'test', accountType: 'Wilder'},
  { email: 'test2@gmail.com', password: 'test', accountType: 'Helper'}
]
app.post('/connexion', (req,res) => {
  const {email, password} = req.body
  console.log(req.body)
  const foundUser = user.find(u => u.email === email)
  if(! foundUser || foundUser.password !== password){
    return res.status(401).json({error: 'Erreur lors de la connexion'})
  }
  req.session.user = foundUser
  res.json(foundUser)
})


const requestAllHelp = require('./routes/requestAllHelp')
const getIndex = require('./routes/getIndex')
const checkLoggedInUser = require('./routes/checkLoggedInUser')
const getInscriptions = require('./routes/getInscriptions')

app.post('/register', getInscriptions)
app.post('/aide', requestAllHelp)
app.get('*', getIndex)
app.post('/connexion', checkLoggedInUser)
// app.get('/connexion', checkLoggedInUser)


console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
