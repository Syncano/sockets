var nlp = require('machinepack-nlp');

// Split a string into an array of strings using the Treebank algorithm.
nlp.tokenize(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
