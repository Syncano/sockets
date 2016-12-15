function (inputs, exits
  /**/
) {
  var Connector  = require('../core/common/connector');

  var config = {
    url: '/api/v1/commerce/coupon/update',
    baseUrl: inputs.baseUrl,
    method: 'put',
    token : inputs.token
  }
  var body = {
    filter: inputs.filter,
    data: inputs.data
  }

  Connector.request(config, {}, body, function(err, resp){
    if(err){
      return exits.error({
        status: err.staus,
        message: err.body
      });
    }else{
      return exits.success({
        status: resp.status,
        body: resp.body
      });
    }
  });
}