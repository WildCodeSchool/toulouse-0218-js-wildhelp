const  connection = require('../db')

const longueurMdpMin = '6'
// const regexEMail =
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
  const given = req.body['name']
  const family = req.body.surname
  const current = req.body.password
  const email = req.body.email

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
