"use stricts";

//requiring modules goes here
const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      expressLayouts = require('express-ejs-layouts'),
      mongoose = require('mongoose');

//configuration
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public')) ;
app.use(expressLayouts);

//set the routes
app.use(require('./app/routes'));

//connect to database
mongoose.connect("mongodb://ratultamuli:aitumoni1.@ds039684.mlab.com:39684/events");

app.listen(3000, () => {
   console.log('server is running....')
})
