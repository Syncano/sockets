var smartystreets = require('machinepack-smartystreets');

// Verify one or more addresses using the SmartyStreets API
smartystreets.verifyAddress(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
