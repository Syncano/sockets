var returntool = require('machinepack-returntool');

// Return a string varible generated earlier in the circuit.
returntool.returnString(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
