var stream = require('machinepack-stream');

// Zip a stream
stream.zip(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    errorNotStream: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
