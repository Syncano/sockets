var json = require('machinepack-json');

// Encode the specified value into a JSON string, but tolerate recursive objects and preserve functions, errors, and regexps.
json.stringifySafe(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
