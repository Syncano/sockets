var math = require('machinepack-math');

// Convert the specified string to its numeric equivalent.
math.parse(ARGS).exec({

    
    notANumber: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
