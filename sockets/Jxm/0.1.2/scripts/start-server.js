var jxm = require('machinepack-jxm');

// Machine used to start an instance of a jxm server
jxm.startServer(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
