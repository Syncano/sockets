var strings = require('machinepack-strings');

// If the string is longer than the given maximum length, chop off characters from the end.
strings.trunc(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
