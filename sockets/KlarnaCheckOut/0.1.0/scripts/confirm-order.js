var klarnacheckout = require('machinepack-klarnacheckout');

// null
klarnacheckout.confirmOrder(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
