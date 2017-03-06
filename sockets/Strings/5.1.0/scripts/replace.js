var strings = require('machinepack-strings');

// Replace parts of a string that match a given regular expression with the specified replacement.
strings.replace(ARGS).exec({

    // The modified string.
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
