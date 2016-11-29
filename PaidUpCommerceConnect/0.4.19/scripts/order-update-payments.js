function (inputs, exits
/**/
) {
  var Connector = require('../core/common/connector')

  var config = {
    url: '/api/v2/commerce/order/update-payments',
    baseUrl: inputs.baseUrl,
    method: 'post',
    token: inputs.token
  }

  var body = {
    orderId: inputs.orderId,
    paymentPlanId: inputs.paymentPlanId,
    paymentPlan: inputs.paymentPlan
  }

  Connector.request(config, {}, body, function (err, resp) {
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
}