var paths = require('machinepack-paths');

// Determine whether or not a is absolute.
paths.ifAbsolute(ARGS).exec({

    
    notAbsolute: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
