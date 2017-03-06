var dof = require('machinepack-dof');

// Calculate depth of field properties
dof.calculate(ARGS).exec({

    
    invalidInputParameter: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
