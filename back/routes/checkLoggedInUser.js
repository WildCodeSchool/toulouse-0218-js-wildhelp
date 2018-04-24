const express = require('express')
const bodyParser = require('body-parser')

//1 Ajouter module session
const session = require('express-session')

const app = express()

//2 Ajouter l'utilisation du module session
app.use(session({ secret: "cats", resave: true, saveUninitialized: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const users = [
  { email: 'test@gmail.com', password: 'test' },
]

const checkLoggedInUser = (req, res, next)=>{
  if(req.session !== undefined &&
      req.session.user !==undefined)
    ){
      const user = req.session.user
      next()
    }
  else{
    res.status(401).json({
      error: "Unauthorized access"
    )}
  }
}

wildcard
//Page d'accueil
app.get('/connexion', (req, res) => {
  console.log(req.session, req.session.user)
  //5 Tester la présence de l'user dans req.session
  const who = (req.session && req.session.user) ?
    req.session.user.username : 'guest. <a href="/login">Please log in</a>'
  res.send(`Hello ${who}`)
})

//Gère la soumission du formulaire de login
app.post('/login', (req, res) => {
  const { username, password } = req.body

//Nouvelle écriture ES6
  const {username, password}=req.body
  const foundUser = users.find(u => u.username === username)
  if(! foundUser || foundUser.password !== password) {
    //401 problème d'authentification
    return res.status(401).json({ error: 'Bad Dobby' })
  }

  //3 stocker l'utilisateur dans la session
  req.session.user = foundUser
  res.json(foundUser)
})

//Affiche le formulaire de login
app.get('/login', (req, res) => {
  res.send(
  /* @html */`
    <form method="POST" action="/login">
      <p>Hint: try username foobar with pass FooBar, or username jondoe with pass JonDoe</p>
      <input name="username" placeholder="username" />
      <input name="password" placeholder="password" />
      <button type="submit" class="button">Submit</button>
    </form>
    <h6>Réponse du serveur</h6>
    <div id="result"></div>
    <script>
      const form = document.getElementsByTagName('form')[0]
      form.addEventListener('submit', evt => {
        evt.preventDefault()
        //Recupère
        const data = {}
        const inputs = document.getElementsByTagName('input')
        for(input of inputs) {
          data[input.name] = input.value
        }
        fetch('/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(data => {
          fetch('/', {
            //4 Permettre l'échange de cookies
            credentials: 'include'
          })
          .then(r => r.text())
          .then(text => {
            document.getElementById('result').innerHTML = text
          })
        })
      })
    </script>
  `)
})

/**
 * Pour pouvoir répondre aux requêtes, l'application
 * doit d'abord ECOUTER sur un "port" (un canal de communication)
 */
module.exports = checkLoggedInUser
  // body...
};
