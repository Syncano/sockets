var Connector = require('../core/common/connector')

var config = {
  url: '/api/v1/commerce/coupon/create',
  baseUrl: inputs.baseUrl,
  method: 'post',
  token: inputs.token
}

var body = {
  code: inputs.code,
  startDate: inputs.startDate,
  endDate: inputs.endDate,
  percent: inputs.percent,
  quantity: inputs.quantity,
  productsId: inputs.productsId
}

Connector.request(config, {}, body, function (err, resp) {
  if (err && err.status === 500) {
    return exits.error({
      status: err.status,
      message: err.message
    })
  } else if (err && err.status === 400) {
    return exits.validationError({
      status: err.status,
      message: err.message.err.message || err.message.err.errmsg
    })
  } else {
    return exits.success({
      status: resp.status,
      body: resp.body.coupon
    })
  }
})