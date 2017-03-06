var aws = require('machinepack-aws');

// Describe one or more of your instances.
aws.ec2DescribeInstances(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
