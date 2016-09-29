"use stricts";

const Events = require('../models/events');

module.exports = {
      //views to events
      eventViews : (req,res) => {
        res.render('pages/home');
      },

      //show events
      showEvents : (req,res) => {
        Events.find({},function(err,events){
          if(err){
            console.log(err.stack);
          }
          else {
            res.render('pages/showEvents',{events: events})
          }
        });

      },

      //render the createEvent page
      createEvent : (req,res) => {
        res.render('pages/createEvent');
      },
      doneCreateEvent : (req,res) => {
        var event = new Events(req.body);
        event.save(function(err,event){
          if(err){
            console.log(err.stack);
          }
          else{
            res.redirect('/showEvents');
          }
        });

      },
      //viewEvent
      viewEvent : (req,res) => {
        Events.findOne({_id:req.params.id},function(err,event){
          if(err){
            console.log(err.stack);
          }
          else{
            res.render('pages/viewEvent',{event:event})
          }
        })
      }

}
