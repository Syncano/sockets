var doJSONRequest = require('../lib/do-request');
var fields = inputs.fields || 'adcreatives{title,body,object_url}';
//GET ad accounts/ and send the api token as a header
doJSONRequest({
  method: 'get',
  url: ['/v2.3/', inputs.adGroupId ].join(""),
  data: {
    'access_token': inputs.accessToken,
    'fields' : fields
  },
  headers: {},
  },
  function (err, responseBody) {
    if (err) { return exits.error(err); }
    return exits.success(responseBody);
  }
)