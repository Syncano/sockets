var Connector = require('../core/common/connector')
var url = '/api/v1/organization/response/' + inputs.organizationId + '/' + inputs.paymentId
var config = {
  url: url,
  baseUrl: inputs.baseUrl,
  method: 'put',
  token: inputs.token
}
Connector.request(config, {}, {}, function (err, resp) {
  if (err) {
    return exits.error({
      status: err.status,
      message: err.message.message || err.message
    })
  } else {
    return exits.success({
      status: 200,
      body: resp.body
    })
  }
})