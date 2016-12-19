function (inputs, exits
  /**/
) {
  var Connector = require('../core/common/connector')
  var config = {
    url: '/api/v2/commerce/order/create',
    baseUrl: inputs.baseUrl,
    method: 'post',
    token: inputs.token
  }
  var body = {
    userId: inputs.userId,
    description: inputs.description,
    paymentsPlan: inputs.paymentsPlan || []
  }
  // Connector.request(config, params, body, cb)
  Connector.request(config, {}, body, function (err, resp) {
    if (err && err.message.statusCode === 'notAvailable') {
      return exits.notAvailable({
        status: err.status,
        message: err.message.message
      })
    } else if (err) {
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
}