var pipl = require('machinepack-pipl');

// Search for a Person by Email address
pipl.searchByEmailAddress(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    malformedRequest: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    apiKeyProblem: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
