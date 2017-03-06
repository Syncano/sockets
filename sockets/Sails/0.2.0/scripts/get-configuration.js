var sails = require('machinepack-sails');

// Retrieve the value of the specified Sails configuration setting.
sails.getConfiguration(ARGS).exec({

    // The value of the specified `sails.config` key.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    noSuchConfig: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
