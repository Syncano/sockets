var https = require('https');
var version = 20130815; //4sq API version
var client_id = inputs.client_id;
var client_secret = inputs.client_secret;
var id = inputs.id;


var url = "https://api.foursquare.com/v2/venues/"+id+"?client_id="+client_id+"&client_secret="+client_secret+"&v="+version;
https.get(url, function(res) {
}).on('error', function(e) {
  return exits.error(e.message);
});
https.get(url, function(res) {
  var data = '';
  res.on("data", function(chunk) {
    data += chunk;
  });
  res.on('end',function(){
      try {
        var obj = JSON.parse(data);
        return exits.success(obj.response);
    } catch (e) {
        return exits.error(e);
    };
  });
}).on('error', function(e) {
   return exits.error(e.message);
});