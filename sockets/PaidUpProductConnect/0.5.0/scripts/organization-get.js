var paidup-product-connect = require('paidup-product-connect');

// get organizations to be part of paidUp
paidup-product-connect.organizationGet(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
