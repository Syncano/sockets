var aws = require('machinepack-aws');

// Start a task using random placement and the default Amazon ECS scheduler.
aws.ecsRunTask(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
