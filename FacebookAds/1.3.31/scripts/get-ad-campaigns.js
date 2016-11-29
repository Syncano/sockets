var doJSONRequest = require('../lib/do-request');
var fields = inputs.fields || 'name';
var data = {
  'access_token': inputs.accessToken,
  'fields': fields
};
if (inputs.queries) {
  for (var i in inputs.queries) {
    data[i] = inputs.queries[i];
  }
}
// GET ad accounts/ and send the api token as a header
doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.adAccountId, '/adcampaign_groups'].join(""),
  data: data,
  headers: {},
}, function(err, responseBody) {
  if (err) {
    return exits.error(err);
  }
  return exits.success(responseBody);
});