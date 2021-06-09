const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

var transport = nodemailer.createTransport({
    host: process.env.MAIL_TRAP_HOST,
    port: process.env.MAIL_TRAP_PORT,
    auth: {
      user: process.env.MAIL_TRAP_USER,
      pass: process.env.MAIL_TRAP_PASSWORD
    }
  });


  transport.use('compile', hbs({
      viewEngine:{ defaultLayout:undefined,
      partialsDir: path.resolve('./src/resources/mail')
      },
      viewPath: path.resolve('./src/resources/mail/'),
      extName: '.html',
  }));


  module.exports = transport;
  