var paidup-product-connect = require('paidup-product-connect');

// Retrieve categories of products
paidup-product-connect.categoryRetrieve(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
