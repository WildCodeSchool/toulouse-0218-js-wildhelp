const mailSettings = require ('../mail-settings.json')
const nodemailer = require('nodemailer')

// messagerie
let smtpConfig = {
  service: 'gmail',
    // host: 'smtp.gmail.com',
    // port: 587,
    // secure: false, // upgrade later with STARTTLS
    auth: mailSettings
}

let mailOptions = {
  to: 'florentin.hauton@hotmail.fr',
  from: 'flokri14@gmail.com',
  subject: 'Un Alumni vous propose son aide !',
  text: 'Bonjour Wilder, un Alumni vous vpropose son aide',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}


// test de la connexion et de l'authentification
const transporter = nodemailer.createTransport(smtpConfig)
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error)
  }
  else {
    console.log('Email sent: ' + info.response)
  }
})
