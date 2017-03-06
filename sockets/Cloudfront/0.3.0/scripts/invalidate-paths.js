var cloudfront = require('machinepack-cloudfront');

// Invalidate one or more paths within a CloudFront distribution.
cloudfront.invalidatePaths(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidCredentials: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    unknownDistribution: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
