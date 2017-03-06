var dictionaries = require('machinepack-dictionaries');

// Construct a dictionary using the specified keys and values.
dictionaries.construct(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
