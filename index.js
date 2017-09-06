var express = require("express");
var restService = express();
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
     alexa.execute();
};
var handlers = {

    'GetNewWelcomeIntent': function () {
        this.emit(':tell', 'Hello sandeep, good evening!');
    }

};

restService.listen((process.env.PORT || 5000), function () {
    console.log("Server listening  ");
});


console.log("working");
