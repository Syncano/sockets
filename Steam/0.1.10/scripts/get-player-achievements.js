var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'ISteamUserStats/GetPlayerAchievements/v0001/',
  method: 'get',
  params: {
    steamid: inputs.steamid,
    key: inputs.key,
    appid: inputs.appid,
    l: inputs.l,
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