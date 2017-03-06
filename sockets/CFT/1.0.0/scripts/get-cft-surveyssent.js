var cft = require('machinepack-cft');

// Gets all surveys sent in a specified date range
cft.getCftSurveyssent(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    InvalidPassword: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    NoAccess: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
