var fullcontact = require('machinepack-fullcontact');

// Retrieve more information about a specific person by facebook username or facebook ID
fullcontact.getPersonFromFacebook(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    malformedRequest: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    apiKeyProblem: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    queryParamProblem: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    queued: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    wait24Hours: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
