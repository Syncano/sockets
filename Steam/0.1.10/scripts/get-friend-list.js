var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'ISteamUser/GetFriendList/v0001/',
  method: 'get',
  params: {
    steamid: inputs.steamid,
    key: inputs.key,
    relationship: inputs.relationship,
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