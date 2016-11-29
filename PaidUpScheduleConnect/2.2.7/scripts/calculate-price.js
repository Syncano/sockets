var Connector  = require('../api/v1/common/connector');

var config = {
  url: '/api/v2/calculate/price',
  baseUrl: inputs.baseUrl,
  method: 'post',
  token : inputs.token//'tdschedule-secret'
}

var body = {
  originalPrice: inputs.originalPrice,
  stripePercent: inputs.stripePercent,
  stripeFlat: inputs.stripeFlat,
  paidUpFee: inputs.paidUpFee,
  discount: inputs.discount,
  payProcessing: inputs.payProcessing,
  payCollecting: inputs.payCollecting
}

Connector.request(config, {}, body, function(err, resp){
  if(err){
    return exits.error(err);
  }else{
    return exits.success(resp);
  }
});