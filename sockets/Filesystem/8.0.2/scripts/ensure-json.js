var fs = require('machinepack-fs');

// Attempt to read from a JSON file, and if it does not exist, create it.
fs.ensureJson(ARGS).exec({

    // The data which is stored in the JSON file now.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    couldNotParse: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
