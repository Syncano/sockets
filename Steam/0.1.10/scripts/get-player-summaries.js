var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'ISteamUser/GetPlayerSummaries/v0002/',
  method: 'get',
  params: {
    steamids: inputs.steamids.join(),
    key: inputs.key,
    format: 'json'
  }
})
.exec({
  success: function (res) {
    var response = JSON.parse(res.body).response;
    return exits.success(response);
  },
  error: function (err) {
    return exits.error(err);
  }
});