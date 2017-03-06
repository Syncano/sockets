var rttc = require('machinepack-rttc');

// Generate some sample values that validate against the provided type schema.
rttc.sample(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
