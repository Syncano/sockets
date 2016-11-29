var Connector = require('../core/common/connector')

var config = {
  url: '/api/v2/commerce/order/history',
  baseUrl: inputs.baseUrl,
  method: 'post',
  token: inputs.token
}

var body = {
  orderId: inputs.orderId,
  limit: inputs.limit,
  sort: inputs.sort
}

Connector.request(config, {}, body, function (err, resp) {
  if (err) {
    return exits.error({
      status: err.status,
      message: JSON.stringify(err.message)
    })
  } else {
    return exits.success({
      status: resp.status,
      body: resp.body
    })
  }
})