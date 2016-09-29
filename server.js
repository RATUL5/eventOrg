"use stricts";

//CONFIG env variables
require('dotenv').config();

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
mongoose.connect(process.env.DB_URI);

app.listen(3000, () => {
   console.log('server is running....')
})
