var strings = require('machinepack-strings');

// Get a substring of consecutive characters from the string.
strings.slice(ARGS).exec({

    // The desired slice of the string.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
