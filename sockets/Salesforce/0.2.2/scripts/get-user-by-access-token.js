var salesforce = require('machinepack-salesforce');

// Get information about the Salesforce user with the specified access token.
salesforce.getUserByAccessToken(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
