var foursquareimageproxy = require('machinepack-foursquareimageproxy');

// get the best image of a venue based on the foursqaure id
foursquareimageproxy.best(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
