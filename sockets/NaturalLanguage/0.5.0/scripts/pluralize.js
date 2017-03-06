var nlp = require('machinepack-nlp');

// Determine the plural version of a singular noun.
nlp.pluralize(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
