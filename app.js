var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var covid_res=require('./routes/covid');
var covid_all=require('./routes/covid_all');
var covid_india_raw=require('./routes/covid_raw');
var covid_TN=require('./routes/covid_TN');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/api/v1/covid', covid_res);
app.use('/api/v1/covid_all', covid_all);
app.use('/api/v1/covid_raw',covid_india_raw);
app.use('/api/v1/covid_TN',covid_TN);

module.exports = app;
