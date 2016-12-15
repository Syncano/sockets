var Http = require('machinepack-http');

var params = {
  appid: inputs.appid,
  count: inputs.name.length,
  format: 'json'
};

inputs.name.forEach(function (val, idx) {
  var key = 'name[' + idx + ']';
  params[key] = val;
});

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'ISteamUserStats/GetGlobalStatsForGame/v0001/',
  method: 'get',
  params: params
})
.exec({
  success: function (res) {
    var response = JSON.parse(res.body).response;
    return exits.success(response);
  },
  error: function (err) {
    return exits.error(err);
  }
})