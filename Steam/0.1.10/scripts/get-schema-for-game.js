var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'ISteamUserStats/GetSchemaForGame/v2/',
  method: 'get',
  params: {
    appid: inputs.appid,
    key: inputs.key,
    format: 'json'
  }
})
.exec({
  success: function (res) {
    var response = JSON.parse(res.body);
    return exits.success(response);
  },
  error: function (err) {
    return exits.error(err);
  }
});