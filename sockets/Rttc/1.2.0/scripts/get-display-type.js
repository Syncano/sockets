var rttc = require('machinepack-rttc');

// Given a value, return its type as a human-readable string.
rttc.getDisplayType(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
