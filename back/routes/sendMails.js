const mailSettings = require ('../mail-settings.json')
const nodemailer = require('nodemailer')

// messagerie
let smtpConfig = {
    host: 'flokri14@gmail.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: mailSettings
}

let mailOptions = {
  from: 'florentin.hauton@hotmail.fr'
  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Un Alumni vous propose son aide !',
  text: 'Bonjour Wilder, un Alumni vous vpropose son aide'
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}


// test de la connexion et de l'authentification
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error)
  }
  else {
    console.log('Email sent: ' + info.response)
  }
})

}
