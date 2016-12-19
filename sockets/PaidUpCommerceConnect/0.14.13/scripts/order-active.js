var Connector = require('../core/common/connector')

var config = {
  url: '/api/v3/commerce/order/active/' + inputs.userId + '/' + inputs.limit,
  baseUrl: inputs.baseUrl,
  method: 'get',
  token: inputs.token
}

Connector.request(config, {}, {}, function (err, resp) {
  console.log('err', err)
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