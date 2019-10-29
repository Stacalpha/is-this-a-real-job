var nodemailer = require('nodemailer');
import { EMAIL_ADDR, EMAIL_PASSWORD } from '../config/constants';

export function sendMail(recipientAddr, title, body) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_ADDR,
      pass: EMAIL_PASSWORD
    }
  });
  
  var mailOptions = {
    from: `ITARJ Notifications <${EMAIL_ADDR}>`,
    to: recipientAddr,
    subject: title,
    text: body
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export function notifyByEmail(res, params) {
  res.render('notif.ejs', params, function(err, renderedEmail) {
    sendMail(recipientAddr, title, renderedEmail);
  });
}
