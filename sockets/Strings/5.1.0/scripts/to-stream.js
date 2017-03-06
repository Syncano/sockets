var strings = require('machinepack-strings');

// Convert a string into a readable stream of data.
strings.toStream(ARGS).exec({

    // A Readable stream representing a string.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
