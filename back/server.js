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
const  connection = require('./db')

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


    const request = `INSERT INTO wildRequest (id, userId, technoId, topic, description ) VALUES('${id}', '${userId}', '${technoId}', '${topic}', '${description}' )`


  connection.query(request, (error, results) => {
    // if (error) throw error
    if(error) {
      return res.status(500).json({
        error: error.message
        })
    }
    console.log(results)
    const topic = results[0]
    res.json( {results: results[0]})
  })
})
// fin demande aide

app.get('*', (req, res) => {
  console.log('wildcard route')
  res.send(html)
  res.end()
})

console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
