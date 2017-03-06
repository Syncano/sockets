var ifthen = require('machinepack-ifthen');

// If the provided value is true, then run the "then" circuit.  Otherwise run the "else" circuit.  Either way, exit "success".
ifthen.ifThenFinally(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
