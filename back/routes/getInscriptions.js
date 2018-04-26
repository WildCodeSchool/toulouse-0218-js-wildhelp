const  connection = require('../db')

const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
const champsObligatoires = ['name', 'surname', 'password', 'email']


const getInscriptions =  (req, res) => {
  console.log(req.body)
  for (champ of champsObligatoires){
    if(! req.body[champ]){
      return res.status(400).json({
        error: 'champs non remplis !'
      })
    }
  }

  
  for (champ['password'] of champsObligatoires){
    if( req.body.password.length < 6 ){
      return res.status(400).json({
        error: 'mot de passe trop court !'
      })
    }
  }
  for (champ['name'] of champsObligatoires){
    if( req.body.name.length < 2 || req.body.name.length > 25  ){
      return res.status(400).json({
        error: 'Nombre de caractères de nom requis incorrect !'
      })
    }
  }
  for (champ['surname'] of champsObligatoires){
    if( req.body.surname.length < 2 || req.body.surname.length > 25  ){
      return res.status(400).json({
        error: 'Nombre de caractères de prenom requis incorrect !'
      })
    }
  }

  if(! regex.test(req.body.email)) {
    return res.status(400).json({
      error: 'email incorrect !'
    })
  }


  const given = req.body['name']
  const family = req.body['surname']
  const current = req.body['password']
  const email = req.body['email']

  const selectUser = `INSERT INTO user (name, surname, password, email) VALUES ('${given}', '${family}', '${current}', '${email}')`

  connection.query(selectUser, (error, results, fields) => {
    if(error) {
      return res.status(500).json({
        error: error.inscription
      })
    }
    console.log(results)
    res.json({results})
  })
}



module.exports = getInscriptions
