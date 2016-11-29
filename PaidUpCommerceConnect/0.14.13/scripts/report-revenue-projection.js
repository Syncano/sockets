var Connector  = require('../core/common/connector');

var config = {
  url: '/api/v1/commerce/reports/revenue/projections',
  baseUrl: inputs.baseUrl,
  method: 'post',
  token : inputs.token
};

var body = inputs.filter;

Connector.request(config, {}, body, function(err, resp){
  if(err){
    return exits.error({
      status: err.status,
      message: err.body
    });
  }else{
    return exits.success({
      status: resp.status,
      body: resp.body
    });
  }
});