var Connector = require('../core/common/connector');
var url = '/api/v1/commerce/catalog/product/' + inputs.productId;
var config = {
  url: url,
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
  } else if (!resp.body.feeManagement) {
    return exits.error({
      status: 400,
      message: "Product dont have feeManagement"
    })
  }
  else {
    var today = new Date();
    var prodJson = JSON.parse(resp.body.feeManagement)

    prodJson.details.images.main = resp.body.images[0].url;

    for (var key in prodJson.paymentPlans) {
      prodJson.paymentPlans[key].dues.forEach(function (ele, idx, arr) {
        var dc = new Date(ele.dateCharge)
        if (dc < today) {
          ele.dateCharge = today;
        } else {
          ele.dateCharge = dc;
        }
      });
    }


    return exits.success({
      status: 200,
      body: prodJson
    })
  }
})