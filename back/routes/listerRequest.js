const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')

const listerRequest = (req, res) => {
  console.log(req.body)
//
//   const request = `SELECT * INTO requete FROM wildRequest`
//
//   connection.query(request, (error,results) => {
//     if(error) {
//       return res.status(500).json({
//         error : error.message
//       })
//     }
//   })
//
//
const requetes = `SELECT * FROM wildRequest`

 connection.query(requetes, (error, results) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }
    res.json(results)
  })
}




module.exports = listerRequest
