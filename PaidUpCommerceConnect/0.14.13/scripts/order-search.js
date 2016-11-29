var Connector = require('../core/common/connector')

var config = {
  url: '/api/v3/commerce/order/search',
  baseUrl: inputs.baseUrl,
  method: 'post',
  token: inputs.token
}

var body = { params: inputs.params }

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