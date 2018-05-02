const  connection = require('../db')
const mysqlEscape = require('../mysqlEscape')


const logOut = (req,res) => {
  req.session.destroy(function(err){
    if(err){
      console.log(err)
    }
    else{
      res.redirect('/')
    }
  })
}


module.exports = logOut
