var cloudinary = require('machinepack-cloudinary');

// Get Image URLS from Cloudinary based on Image ID.
cloudinary.getImageUrls(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
