module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
	response.say( 'Welcome, have a good day!!! What would you like to do?' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

// app.intent('sayNumber',
//   {
//     "slots":{"number":"NUMBER"}
// 	,"utterances":[ 
// 		"say the number {1-100|number}",
// 		"give me the number {1-100|number}",
// 		"tell me the number {1-100|number}",
// 		"I want to hear you say the number {1-100|number}"]
//   },
//   function(request,response) {
//     var number = request.slot('number');
//     response.say("You asked for the number "+number);
//   }
// );
app.intent('GetNewWelcomeIntent',function(request,response) {
    var name = request.slot('name');
    response.say("Your name is "+zodiac+" Thank You!!! have a good day");
  }
);
module.exports = app;
