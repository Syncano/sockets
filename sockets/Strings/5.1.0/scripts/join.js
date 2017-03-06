var strings = require('machinepack-strings');

// Combine an array of strings into one new string.
strings.join(ARGS).exec({

    // The concatenated result string.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
