var thumb = require('machinepack-thumb');

// Transform an convert image (PNG, JPG) with crop, resize, blur, rotate, flip, ...
thumb.to(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
