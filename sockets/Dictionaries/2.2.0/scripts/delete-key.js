var dictionaries = require('machinepack-dictionaries');

// Delete a key from a dictionary and return the result (a new dictionary).
dictionaries.deleteKey(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noSuchKey: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
