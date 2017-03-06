var rttc = require('machinepack-rttc');

// Validate a value against a type schema. If it's close enough, coerce it to fit.
rttc.validate(ARGS).exec({

    
    invalid: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
