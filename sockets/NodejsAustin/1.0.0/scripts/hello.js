var nodejsaustin = require('machinepack-nodejsaustin');

// Say hello on the console.
nodejsaustin.hello(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
