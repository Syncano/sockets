var nlp = require('machinepack-nlp');

// Determine the Levenstein distance between two strings.
nlp.levenshtein(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
