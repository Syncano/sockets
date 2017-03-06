var aws = require('machinepack-aws');

// Return a list of tasks for a specified cluster. 
aws.ecsListTasks(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
