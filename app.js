var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var generate_uid = require('./routes/generate_uid');
var covid_res=require('./routes/covid');
var covid_all=require('./routes/covid_all');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/api/v1/users', users);
app.use('/api/v1/generate_uid', generate_uid);
app.use('/api/v1/covid', covid_res);
app.use('/api/v1/covid_all', covid_all);

module.exports = app;
