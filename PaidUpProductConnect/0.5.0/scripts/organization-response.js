var Connector = require('../core/common/connector')
var url = '/api/v1/organization/response/' + inputs.organizationId
var config = {
  url: url,
  baseUrl: inputs.baseUrl,
  method: 'get',
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