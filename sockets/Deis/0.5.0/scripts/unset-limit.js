var deis = require('machinepack-deis');

// Unsets resource limits for an application.
deis.unsetLimit(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidLimit: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notAuthenticated: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
