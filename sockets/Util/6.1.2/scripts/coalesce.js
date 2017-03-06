var util = require('machinepack-util');

// Return the first value if it is defined, otherwise the second.
util.coalesce(ARGS).exec({

    // Either the preferred value or the secondary value.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
