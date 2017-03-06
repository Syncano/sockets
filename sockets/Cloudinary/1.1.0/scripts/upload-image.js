var cloudinary = require('machinepack-cloudinary');

// Upload image on Cloudinary (using streams).
cloudinary.uploadImage(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
