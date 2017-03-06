var local-sails-apps = require('machinepack-local-sails-apps');

// Determine the conventional controller+action to use for the given set of routes.
local-sails-apps.deduceControllers(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
