var ic = require('machinepack-ic');

// Connect to an Interaction Center® server
ic.connect(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    missingProperty: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidProperty: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    deprecatedResource: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notAcceptingConnections: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    serverUnavailable: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    icws_error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
