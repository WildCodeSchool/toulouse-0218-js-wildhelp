const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')
const requestCourse= []
let id = 1
const requestAllHelp =  (req, res) => {

  console.log(req.body)
  const technoId = req.body.langage
  const topic = mysqlEscape(req.body.topic)
  const description = mysqlEscape(req.body.description)
  const userId = req.session.user.id
  const name = req.session.user.name
  const surname = req.session.user.surname
  const email = req.session.user.email
  const request = `INSERT INTO wildRequest (userId, name, surname, email, technoId, topic, description ) VALUES (${userId}, '${name}', '${surname}', '${email}', ${technoId}, '${topic}', '${description}')`


  connection.query(request, (error, results) => {

    // if (error) throw error
    if(error) {
      return res.status(500).json({
        error : error.message
        })
    }
    else {
      return res.status(200).json({
        success : 'Félicitation, votre requête est bien pris en compte ! Un Alumni vous contactera pour prendre rendez-vous.'
      })
    }
    console.log(results)

    const topic = results[0]
    res.json( {results: results[0]})

  })
}

module.exports = requestAllHelp
