var smartystreets = require('machinepack-smartystreets');

// Look up and verify city, state, and ZIP Code combinations
smartystreets.verifyCityStateZip(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    missingParams: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    cityAlone: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    blank: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidState: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidCity: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidZipcode: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    conflict: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
