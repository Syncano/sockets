var Cloudflare = require('../cloudflare.js');
var params = {
  z: inputs.domain,
  type: inputs.type,
  name: inputs.name,
  id: inputs.recordId,
  content: inputs.content,
  ttl: inputs.ttl,
  service_mode: inputs.onCloudflare
};

Cloudflare.auth(inputs.email, inputs.token).send('rec_edit', params, function (err, response, body) {
  if (err)
    return exits.error(err);

  if (response.statusCode > 299 || response.statusCode < 200)
    return exits.error(response.statusCode);

  response = JSON.parse(response.body);

  if (response.result === 'error')
    return Cloudflare.handleError(response, exits);

  return exits.success(response.response.rec.obj);
});