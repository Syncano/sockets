var dictionaries = require('machinepack-dictionaries');

// Rename a key in a dictionary and return the result (a new dictionary).
dictionaries.renameKey(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noSuchKey: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    keyAlreadyExists: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
