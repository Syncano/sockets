var Cloudflare = require('../cloudflare.js');
var params = {
  z: inputs.domain,
  interval: inputs.interval
};

Cloudflare.auth(inputs.email, inputs.token).send('stats', params, function (err, response, body) {
  if (err)
    return exits.error(err);

  if (response.statusCode > 299 || response.statusCode < 200)
    return exits.error(response.statusCode);

  response = JSON.parse(response.body);

  if (response.result === 'error')
    return Cloudflare.handleError(response, exits);

  return exits.success(response.response.rec.obj);
});