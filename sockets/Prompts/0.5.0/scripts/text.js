var prompts = require('machinepack-prompts');

// Prompt the command-line user for a value entered interactively as a string.
prompts.text(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
