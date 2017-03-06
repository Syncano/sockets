var strings = require('machinepack-strings');

// Cast the specified value to a string, if it isn't one already.
strings.construct(ARGS).exec({

    // A string constructed from the provided value.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
