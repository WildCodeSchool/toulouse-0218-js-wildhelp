const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')

const deleteRequest = (req, res) => {
  console.log(req.body)

const id = req.params.id
const deleteQuery =`DELETE FROM wildRequest WHERE id = ${id}`

 connection.query(deleteQuery, (error, results) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }
    res.json(results)
  })
}

module.exports = deleteRequest
