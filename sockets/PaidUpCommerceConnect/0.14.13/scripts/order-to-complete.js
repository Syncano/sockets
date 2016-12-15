var Connector = require('../core/common/connector')

var config = {
  url: '/api/v2/commerce/order/complete',
  baseUrl: inputs.baseUrl,
  method: 'get',
  token: inputs.token
}

Connector.request(config, {}, {}, function (err, resp) {
  if (err) {
    return exits.error({
      status: err.status,
      message: err.body
    })
  } else {
    return exits.success({
      status: resp.status,
      body: resp.body
    })
  }
})