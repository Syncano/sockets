var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'IPlayerService/IsPlayingSharedGame/v0001/',
  method: 'get',
  params: {
    steamid: inputs.steamid,
    key: inputs.key,
    appid_playing: inputs.appid_playing,
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