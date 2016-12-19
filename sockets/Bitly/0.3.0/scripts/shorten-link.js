var BitlyAPI = require("node-bitlyapi");
var Bitly = new BitlyAPI({
    client_id: inputs.clientId,
    client_secret: inputs.clientSecret,
});
Bitly.setAccessToken(inputs.accessToken);
Bitly.shorten({longUrl:inputs.url}, function(err, json) {
  try {
    var results = JSON.parse(json);
    if (results.status_code != 200) {return exits.error(results);}
    if (!results.data || !results.data.url) {return exits.error(results);}
    return exits.success(results.data.url.trim());
  } catch (e) {
    return exits.error(e);
  }
});