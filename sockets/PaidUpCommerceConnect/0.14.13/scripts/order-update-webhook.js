var Connector = require('../core/common/connector')

var config = {
  url: '/api/v2/commerce/order/update-webhook',
  baseUrl: inputs.baseUrl,
  method: 'post',
  token: inputs.token
}

Connector.request(config, {}, inputs.data, function (err, resp) {
	console.log('resp.body', resp.body)
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