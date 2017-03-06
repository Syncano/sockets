var paidup-product-connect = require('paidup-product-connect');

// save a new organizations to be part of paidUp
paidup-product-connect.organizationRequest(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
