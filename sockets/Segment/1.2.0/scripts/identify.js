var segment = require('machinepack-segment');

// Identify a user by her unique id and a set of associated traits.
segment.identify(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
