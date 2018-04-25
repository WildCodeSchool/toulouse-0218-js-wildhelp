const  connection = require('../db')

const getInscriptions =  (req, res) => {
  console.log(req.body)
  const given = req.body.name
  const family = req.body.surname
  const current = req.body.password
  const email = req.body.email


const selectUser = `INSERT INTO user (name, surname, password, email, technoId) VALUES ('${given}', '${family}', '${current}', '${email}', 1)`



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
