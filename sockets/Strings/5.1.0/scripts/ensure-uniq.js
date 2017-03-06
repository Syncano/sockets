var strings = require('machinepack-strings');

// Make a unique, but still human-readable, version of a string vs. a set of existing strings by adding a number to the end.
strings.ensureUniq(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
