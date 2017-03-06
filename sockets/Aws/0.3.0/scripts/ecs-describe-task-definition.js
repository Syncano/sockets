var aws = require('machinepack-aws');

// Describe an ECS task definition 
aws.ecsDescribeTaskDefinition(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
