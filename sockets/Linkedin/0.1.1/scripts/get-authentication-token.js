var linkedin = require('machinepack-linkedin');

// Obtains the authentication token after you complete the url login phase.  Make sure to do this within 20 seconds or else the code expires.
linkedin.getAuthenticationToken(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
