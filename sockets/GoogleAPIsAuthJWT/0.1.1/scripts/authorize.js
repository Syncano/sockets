var googleapisauthjwt = require('machinepack-googleapisauthjwt');

// Get authorization tokens
googleapisauthjwt.authorize(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
