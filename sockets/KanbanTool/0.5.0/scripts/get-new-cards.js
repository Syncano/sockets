var kanbantool = require('machinepack-kanbantool');

// Gets the newly created cards
kanbantool.getNewCards(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
