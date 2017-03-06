var dictionaries = require('machinepack-dictionaries');

// Merge two dictionaries together and return the result (a new dictionary)
dictionaries.merge(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
