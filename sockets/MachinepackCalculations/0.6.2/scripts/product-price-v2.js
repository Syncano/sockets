var calculations = require('machinepack-calculations');

// Calculate final price when user does not assume any fee.
calculations.productPriceV2(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
