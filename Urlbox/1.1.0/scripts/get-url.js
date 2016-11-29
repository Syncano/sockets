var crypto = require('crypto');
var util = require('util');

var apiKey = inputs.apiKey;
var apiSecret = inputs.secret;

var encodedUrl = encodeURIComponent(inputs.url);
var queryString = "url=" + encodedUrl;

if(inputs.width){
  queryString += "&width=" + inputs.width;
}
if(inputs.height){
  queryString += "&height=" + inputs.height;
}
if(inputs.thumb_width){
  queryString += "&thumb_width=" + inputs.thumb_width;
}
if(inputs.user_agent){
  queryString += "&user_agent=" + inputs.user_agent;
}
if(inputs.wrap){
  queryString += "&wrap=" + inputs.wrap;
}
if(inputs.delay){
  queryString += "&delay=" + inputs.delay;
}
if(inputs.full_page){
  queryString += "&full_page=" + inputs.full_page;
}
if(inputs.force){
  queryString += "&force=" + inputs.force;
}

var token = crypto.createHmac("sha1", inputs.secret).update(queryString).digest("hex");

var constructedUrl = util.format('https://api.urlbox.io/v1/%s/%s/png?%s', apiKey, token, queryString);

return exits.success(constructedUrl);