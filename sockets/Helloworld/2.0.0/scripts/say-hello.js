var helloworld = require('machinepack-helloworld');

// Log a hello message with a generated secret code and other information
helloworld.sayHello(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
