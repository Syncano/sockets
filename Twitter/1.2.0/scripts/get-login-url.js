var request = require('request');
var qs = require('querystring');

request.post({
  url: 'https://api.twitter.com/oauth/request_token',
  oauth: {
    callback: inputs.callbackUrl,
    consumer_key: inputs.consumerKey,
    consumer_secret: inputs.consumerSecret
  }
}, function(err, response, body) {
  if (err) {
    return exits.error(err);
  }
  if (response.statusCode > 299 || response.statusCode < 200) {
    return exits.error(response.statusCode);
  }

  var access_token = qs.parse(body);

  return exits.success('https://twitter.com/oauth/authenticate?oauth_token=' + access_token.oauth_token);

});