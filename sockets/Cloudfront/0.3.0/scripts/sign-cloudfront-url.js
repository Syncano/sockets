var cloudfront = require('machinepack-cloudfront');

// Sign an Amazon CloudFront URL.
cloudfront.signCloudfrontUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
