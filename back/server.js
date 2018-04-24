const express = require('express')
// Module path: manipulation des chemins de fichiers
const path = require('path')
const app = express()
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
const connection = require('./db')

const html = /* @html */ `
<!doctype html>
<html class="no-js" lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Formulaires</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="wildhelp.css" />

  </head>
  <style>
    body { font-size: 20px; }
    input { border: 1px solid #ddd; border-radius: 3px; padding: 5px 10px; }
  </style>
  <body>

    <div class="container-fluid" id="main"></div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="page.js"></script>
    <script src="wildhelp.js"></script>
  </body>
</html>`

// partie demande d'aide !!!
const requestCourse= []
let id = 1

app.post('/aide', (req, res) => {
  console.log(req.body)
  const language = req.body.language
  const topic = req.body.topic
  const description = req.body.description

    if(description.length < 30) {
      return res.status(400).json({
        error: 'Description trop court (30 caractères minimum)'
      })
    }
//
// const newRequest = {
//   id: id,
//   langage: language,
//   topic: topic,
//   description: description
// }
//
// requestCourse.push(newRequest)
// id += 1
// res.json(newRequest)

// const topic = req.body.topic
// const description = req.body.description
const query = `SELECT topic, description FROM wildRequest WHERE topic = '${topic}' AND description = '${description}'`

connection.query(query, (error, results) => {
  // if (error) throw error
  if(error) {
    return res.status(500).json({
      error: error.message
      })
    }
  const topic = result[0]
  res.json( {results: results[0]})
})
})
// fin demande aide

// partie Inscription !!!!
const users = [
  { name: 'Leila', surname:'DQIQI', email:'leila.dqiqi@yahoo.fr', password: 'abcdefg'},
  { name: 'Layla', surname:'Tazia', email:'leila314tazia@gmail.com', password: 'abbcd'}
]
app.post('/login', (req, res) => {
const {email, password} = req.body
const foundUser = users.find(user => user.email === email)
if(! foundUser || foundUser.password !== password) {
  return res.status(401).json({ error: 'Mot de passe incorrect' })
}
req.session.user = foundUser
res.json(foundUser)
})

app.get('/logout', (req, res) => {
  delete req.session.users
  res.json({ success: true})
})
app.post('/register', (req, res) => {

console.log(req.body)
res.json({
  success: true
})
})


app.get('*', (req, res) => {
  console.log('wildcard route')
  res.send(html)
  res.end()
})


// app.get('/test', (req, res) => {
//   connection.query('SELECT name, surname, email, password FROM user', (error, results) => {
//   if (error) {
//     return res.status(500).json({
//       error:error.message
//     })
//   }
//   res.json(results)
//   })
// })
//


console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
