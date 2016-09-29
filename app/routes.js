"use stricts";

const express = require('express'),
      router = express.Router(),
      mainController = require('./controllers/main.controller');

//get the events
router.get('/', mainController.eventViews);
//show events
router.get('/showEvents',mainController.showEvents);
//get the event creating page
router.get('/eventCreate',mainController.createEvent);
//creating Events
router.post('/event',mainController.doneCreateEvent);
//get an individual event
router.get('/view/:id',mainController.viewEvent);



module.exports=router;
