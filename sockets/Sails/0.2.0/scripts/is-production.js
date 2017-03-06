var sails = require('machinepack-sails');

// Determine whether a Sails application is running in the production environment.
sails.isProduction(ARGS).exec({

    // Whether or not the Sails app is running in the production environment.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
