var paidup-product-connect = require('paidup-product-connect');

// Retrieve product by Id
paidup-product-connect.productRetrieve(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
