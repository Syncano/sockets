var democracyosmanager = require('machinepack-democracyosmanager');

// Delete a DemocracyOS Deployment.
democracyosmanager.deleteDeployment(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    serverError: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    badRequest: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
