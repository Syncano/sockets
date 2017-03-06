var strings = require('machinepack-strings');

// Convert a string to camel-case (varying capitalization instead of spaces/underscores/dashes).
strings.toCamelCase(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
