var fullcontact = require('machinepack-fullcontact');

// Retrieves contact information by an MD5 of an email address
fullcontact.getPersonFromEmailMd5(ARGS).exec({

    
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
