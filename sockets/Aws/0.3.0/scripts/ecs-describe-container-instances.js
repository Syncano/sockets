var aws = require('machinepack-aws');

// Describe Amazon EC2 Container Service container instances
aws.ecsDescribeContainerInstances(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
