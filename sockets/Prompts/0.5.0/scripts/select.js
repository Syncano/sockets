var prompts = require('machinepack-prompts');

// Prompt the command-line user to make a choice from a list of options.
prompts.select(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
