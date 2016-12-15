var Connector = require('../core/common/connector');

var config = {
  url: '/api/v2/commerce/catalog/category/3',
  baseUrl: inputs.baseUrl,
  method: 'get',
  token: inputs.token
}


Connector.request(config, {}, {}, function (err, resp) {
  if (err) {
    return exits.error({
      status: err.status,
      message: err.message
    })
  } else {

    var result = [];
    var categories = resp.body;
    categories.map(function(cat){

      var category = {
        _id : cat.entityId,
        name: cat.name,
        description: cat.description,
        company : cat.entityId,
        image: cat.mediaGallery.images[0].fullUrl,
        isActive: cat.status == "1",
        products: []
      }
      cat.simpleProducts.map(function(prod){
        if(prod.feeManagement){
          var prodJson = JSON.parse(prod.feeManagement);
          prodJson.details.images.main =  prod.mediaGallery.images[0].fullUrl;
          category.products.push(prodJson);
        }
      });
      result.push(category);
    });

    return exits.success({
      status: resp.status,
      body: result
    })
  }
})