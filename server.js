const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname))
app.use(bodyParser.json())
const  connection = require('./db')



const html = `
<!doctype html>
<html class="no-js" lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Formulaires</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
  </head>
  <style>
    body { font-size: 20px; }
    input { border: 1px solid #ddd; border-radius: 3px; padding: 5px 10px; }
  </style>
  <body>

    <div class="container" id="main"></div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="page.js"></script>
    <script src="formulaires.js"></script>
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

const newRequest = {
  id: id,
  langage: language,
  topic: topic,
  description: description
}

requestCourse.push(newRequest)
id += 1
res.json(newRequest)

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
}

app.get('*', (req, res) => {
  res.send(html)
  res.end()
})
// fin partie demande d'aide

console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
