var json = require('machinepack-json');

// Encode the specified value into a JSON string.
json.stringify(ARGS).exec({

    
    couldNotStringify: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
