var returntool = require('machinepack-returntool');

// Return an Object varible generated earlier in the circuit.
returntool.returnObject(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
