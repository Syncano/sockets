var jangosmtp = require('machinepack-jangosmtp');

// Send an html email.
jangosmtp.sendHtmlEmail(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    wrongOrNoUsernamePassword: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
