var urlbox = require('machinepack-urlbox');

// Get's the URL from URLBOX.io to display the screen capture.
urlbox.getUrl(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
