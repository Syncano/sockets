var strings = require('machinepack-strings');

// Convert all lowercase letters to uppercase in the specified string.
strings.toUpperCase(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
