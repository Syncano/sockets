var strings = require('machinepack-strings');

// Determine the length of a string (i.e. count the number of characters)
strings.length(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
