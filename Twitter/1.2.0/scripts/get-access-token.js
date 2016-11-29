var request = require('request');
var qs = require('querystring');

request.post({
  url: 'https://api.twitter.com/oauth/access_token',
  oauth: {
    consumer_key: inputs.consumerKey,
    consumer_secret: inputs.consumerSecret,
    token: inputs.oauthToken,
    verifier: inputs.oauthVerifier
  }
}, function(err, response, body) {
  if (err) {
    return exits.error(err);
  }
  if (response.statusCode > 299 || response.statusCode < 200) {
    return exits.error(response.statusCode);
  }


  var parsedResponse;
  try {
    // oauth_token=3493938-B34829ABLD2NASI242AAGa32&oauth_token_secret=42Ga2gj249gADg9031jgasdGanv2139mmadval14aD&user_id=3493938&screen_name=mikermcneil
    parsedResponse = qs.parse(body);
  }
  catch (e) {
    return exits.error(e);
  }

  return exits.success({
    userId: parsedResponse.user_id,
    screenName: parsedResponse.screen_name,
    accessToken: parsedResponse.oauth_token,
    accessSecret: parsedResponse.oauth_token_secret
  });

});