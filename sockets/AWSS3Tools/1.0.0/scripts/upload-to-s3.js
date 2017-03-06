var awss3tools = require('machinepack-awss3tools');

// Upload an object to S3.
awss3tools.uploadToS3(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
