function (inputs, exits
  /**/
) {
  var Connector  = require('../core/common/connector');

  var config = {
    url: '/api/v1/commerce/coupon/redeem',
    baseUrl: inputs.baseUrl,
    method: 'post',
    token : inputs.token
  }

  var body = {
    coupon: inputs.coupon,
    productId: inputs.productId
  }

  Connector.request(config, {}, body, function(err, resp){
    if(err && err.message.statusCode === 'notAvailable'){
      return exits.notAvailable({
        status: err.status,
        message: err.message.message
      });
    }else if(err){
      return exits.error({
        status: err.status,
        message: err.body
      });
    }else{
      console.log('resp.body',resp.body);

      return exits.success({
        status : resp.status,
        body : resp.body
      });
    }
  });
}