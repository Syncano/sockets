var Http = require('machinepack-http');

var params = {
  steamid: inputs.steamid,
  key: inputs.key,
  include_appinfo: inputs.include_appinfo,
  include_played_free_games: inputs.include_played_free_games,
  format: 'json'
};

if (inputs.appids_filter) {
  params.appids_filter = '[' + inputs.appids_filter.join() + ']';
}

Http.sendHttpRequest({
  baseUrl: 'http://api.steampowered.com/',
  url: 'IPlayerService/GetOwnedGames/v0001/',
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
});