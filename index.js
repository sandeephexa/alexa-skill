module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'WelcomeSkill' );


app.launch( function( request, response ) {
	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. ' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('GetNewWelcomeIntent',
  {
    "slots":{"string":"STRING"}
	,"utterances":[ 
		"say hi ",
		"say hello {string}",
		]
  },
  function(request,response) {
    var number = request.slot('string');
    response.say("Hello "+string+"Good evening");
  }
);

module.exports = app;

console.log("working");
