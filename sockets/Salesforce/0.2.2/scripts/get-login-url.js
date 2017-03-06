var salesforce = require('machinepack-salesforce');

// Get the URL on salesforce.com that a user should visit to allow/deny the specified Salesforce Developer app (i.e. your app).
salesforce.getLoginUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
