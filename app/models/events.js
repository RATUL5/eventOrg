"use stricts";

var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var eventSchema = new Schema({
    name:String,
    description : String
});

var eventModel = mongoose.model('Events',eventSchema);

module.exports = eventModel;
