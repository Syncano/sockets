var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/',
  method: 'get',
  params: {
    gameid: inputs.gameid,
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