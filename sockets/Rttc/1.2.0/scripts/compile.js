var rttc = require('machinepack-rttc');

// Return a JavaScript code snippet which would accurately represent the given value in code.
rttc.compile(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
