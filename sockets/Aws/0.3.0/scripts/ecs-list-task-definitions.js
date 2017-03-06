var aws = require('machinepack-aws');

// Return a list of task definitions that are registered to your account.
aws.ecsListTaskDefinitions(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
