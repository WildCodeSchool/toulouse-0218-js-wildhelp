const  connection = require('../db')

const getInscriptions = (req, res) => {
  console.log(req.body)
  // const given = req.body.name
  // const family = req.body.surname
  // const current = req.body.password
  // const email = req.body.email
  // return res.json({
  //   success: true





  connection.connect( (err) => {
    if (err) throw err;
    console.log("Connected!");
    const sql = `INSERT INTO user (id, name, surname, password, email, technoId) VALUES (1, '${given}', '${family}', '${current}', '${email}', 1)`
    connection.query(sql,(err, result) => {
      if (err) throw err;
      console.log("1 record inserted")
    })
  })
}
//   connection.query( (error, results, fields) => {
//     const selectUser = `INSERT INTO user (id, name, surname, password, email, technoId) VALUES (1, '${given}', '${family}', '${current}', '${email}', 1)`
//     // if (error) throw error
//     if(error) {
//       return res.status(500).json({
//         error: error.message
//         })
//     }
//     console.log(results)
//     const email = results[0]
//     res.json( {results: results[0]})
//   })
// }


module.exports = getInscriptions

// console.log(req.body)
// const given = req.body.name
// const family = req.body.surname
// const current = req.body.password
// const email = req.body.email
//
// return res.json({
//   success: true
// })
//
// const selectUser = `INSERT INTO user (id, name, surname, password, email, technoId) VALUES (1, '${given}', '${family}', '${current}', '${email}', 1)`
//
//
//
// connection.query(selectUser, (error, results, fields) => {
//   // if (error) throw error
//   if(error) {
//     return res.status(500).json({
//       error: error.message
//       })
//   }
//   console.log(results)
//   const email = results[0]
//   res.json( {results: results[0]})
// })


//   const given = req.body.name
//   const family = req.body.surname
//   const current = req.body.password
//   const email = req.body.email
//   connection.connect = (err) => {
//     if (err) throw err
//
//   const selectUser = `INSERT INTO user (id, name, surname, password, email, technoId) VALUES (1, '${given}', '${family}', '${current}', '${email}', 1)`
// onnection.query(selectUser, (error, results) => {
//   if (err) throw (err)
//   console.log("un utilisateur crée")
//   res.end()
// })
// }
