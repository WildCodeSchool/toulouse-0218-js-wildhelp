const connection = require('../db')
const express = require('express')
// const bodyParser = require('body-parser')

//1 Ajouter module session
const session = require('express-session')

const app = express()

//2 Ajouter l'utilisation du module session
// app.use(session({ secret: "cats", resave: true, saveUninitialized: true }))
// // app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

const users = [
  { username: 'test@gmail.com', password: 'test' },
]

const checkLoggedInUser = (req, res, next)=>{
  if(req.session !== undefined &&
      req.session.user !==undefined)
    {
      const user = req.session.user
      next()
    }
  else{
    res.status(401).json({
      error: "Unauthorized access"
    })
  }
}
//Page d'accueil
app.get('/connexion', (req, res) => {
  console.log(req.session, req.session.user)
  //5 Tester la présence de l'user dans req.session
  const who = (req.session && req.session.user) ?
    req.session.user.username : 'guest. <a href="/connexion">Please log in</a>'
  res.send(`Hello ${who}`)
})

//Gère la soumission du formulaire de login
app.post('/connexion', (req, res) => {
  const { username, password } = req.body

//Nouvelle écriture ES6
  const foundUser = users.find(u => u.username === username)
  if(! foundUser || foundUser.password !== password) {
    //401 problème d'authentification
    return res.status(401).json({ error: 'Bad Dobby' })
  }

  //3 stocker l'utilisateur dans la session
  req.session.user = foundUser
  res.json(foundUser)
})


module.exports = checkLoggedInUser
