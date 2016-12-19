var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'IPlayerService/GetRecentlyPlayedGames/v0001/',
  method: 'get',
  params: {
    steamid: inputs.steamid,
    key: inputs.key,
    count: inputs.count,
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