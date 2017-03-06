var strings = require('machinepack-strings');

// Capitalize the first (or any) letter in a string.
strings.capitalize(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
