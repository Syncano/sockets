var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'ISteamNews/GetNewsForApp/v0002/',
  method: 'get',
  params: {
    appid: inputs.appid,
    count: inputs.count,
    maxlength: inputs.maxlength,
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
})