var Connector  = require('../api/v1/common/connector');

var config = {
  url: '/api/v2/calculate/prices',
  baseUrl: inputs.baseUrl,
  method: 'post',
  token : inputs.token//'tdschedule-secret'
}

var body = { prices : inputs.prices}

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