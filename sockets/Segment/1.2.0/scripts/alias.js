var segment = require('machinepack-segment');

// Merge two user identities, effectively connecting two sets of user data as one.
segment.alias(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
