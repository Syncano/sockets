var strings = require('machinepack-strings');

// Split a string into an array of strings using a regular expression.
strings.split(ARGS).exec({

    // An array of substrings.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    invalidRegexp: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
