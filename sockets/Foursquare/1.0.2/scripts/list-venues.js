var https = require('https');
var version = 20130815; //4sq API version

var client_id = inputs.client_id;
var client_secret = inputs.client_secret;
var near = inputs.near;
if (!inputs.query) {
  var query = ""
} else {
  var query = inputs.query;
}
console.log(query);
if (!inputs.limit) {
  var limit = 10;
} else {
  var limit = inputs.limit;
}
console.log(limit);

var url = "https://api.foursquare.com/v2/venues/search?client_id="+client_id+"&client_secret="+client_secret+"&v="+version+"&near="+near+"&query="+query+"&limit="+limit;
console.log(url);
https.get(url, function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
https.get(url, function(res) {
  var data = '';
  res.on("data", function(chunk) {
    data += chunk;
  });
  res.on('end',function(){
      try {
        var obj = JSON.parse(data);
        return exits.success(obj);
    } catch (e) {
        return exits.error(e);
    };
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
   return exits.error(e);
});