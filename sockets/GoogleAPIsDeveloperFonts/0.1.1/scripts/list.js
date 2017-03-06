var googleapisdeveloperfonts = require('machinepack-googleapisdeveloperfonts');

// List Web Fonts
googleapisdeveloperfonts.list(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    accessNotConfigured: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
