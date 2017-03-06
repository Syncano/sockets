var local-sails-apps = require('machinepack-local-sails-apps');

// Build a JavaScript code string for a Sails.js controller using the provided metadata.
local-sails-apps.buildController(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
