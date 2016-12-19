var URL = require('url');
var QS = require('querystring');

try {
  var videoId = QS.parse(URL.parse(inputs.url).query).v;
  return exits.success(videoId);
}
catch (e) {
  return exits.invalidUrl(e);
}