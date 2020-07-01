'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');

var app = require('express')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort =  process.env.PORT || 3000;

////// MAIL ///////////////////////////////////////


var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var nodemailer = require('nodemailer');

app.post('/send-email', function (req, res) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'leta.barrows@ethereal.email',
          pass: 'wN31h5Bv31kJeg64xj'
        }
      });
      var mailOptions = {
        from: req.body.email,
        to: 'leta.barrows@ethereal.email',
        subject: req.body.subject,
        text: req.body.message
      };
      // if (mailOptions.subject !== undefined && mailOptions.text !== undefined) {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
            console.log('mail ' + mailOptions.subject + " - " + mailOptions.text);
          }
        });
        res.writeHead(301, {Location: '/pages/contact-us.html?msg=thanks'});
        res.end();
      }
    // }
);

/////////////////////////////////////////////////////////
let serveStatic = require("serve-static");


app.use(serveStatic(__dirname + "/public"));




//////////////////////////////////////////////////////
const express = require('express');
// const app = express();
// const path = require('path');
const port = process.env.PORT || 3000;
// const bodyParser = require('body-parser');

app.listen(port, () => console.log(`listening on port ${port}!`));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/index.html'));
});

app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/index.html'));
});

app.get('/events.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/events.html'));
});

app.get('/volunteers.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/volunteers.html'));
});

app.get('/event.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/event.html'));
});
app.get('/volunteer.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/volunteer.html'));
});

app.get('/about.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/about.html'));
});

app.get('/activities.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/activities.html'));
});

app.get('/contact-us.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/contact-us.html'));
});

app.get('/terms.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/terms.html'));
});




