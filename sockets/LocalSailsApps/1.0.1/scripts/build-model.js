var local-sails-apps = require('machinepack-local-sails-apps');

// Build a JavaScript code string for a Sails.js model using the provided metadata.
local-sails-apps.buildModel(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
