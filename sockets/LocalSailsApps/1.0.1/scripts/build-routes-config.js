var local-sails-apps = require('machinepack-local-sails-apps');

// Generate a JavaScript code string for the `config/routes.js` file (i.e. in a Sails.js app.)
local-sails-apps.buildRoutesConfig(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
