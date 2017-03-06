var salesforce-expanded = require('machinepack-salesforce-expanded');

// Generate a new access token for acting on behalf of a particular Salesforce user account.
salesforce-expanded.getAccessToken(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
