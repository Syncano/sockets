var Connector = require('../core/common/connector')

var config = {
  url: '/api/v2/commerce/order/cronjob',
  baseUrl: inputs.baseUrl,
  method: 'post',
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