var querystring = require('querystring');
var http = require('http');

var data = querystring.stringify({
  api_key: inputs.apiKey,
  source: inputs.source,
  lang: inputs.language,
  testcases: JSON.stringify(inputs.testcases),
  wait: inputs.wait,
  callback_url: inputs.callbackUrl,
  format: inputs.format
});

var options = {
  hostname: 'api.hackerrank.com',
  port: 80,
  path: '/checker/submission.json',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': data.length
  }
};
var response = '';
var req = http.request(options, function (res) {
  res.on('data', function (chunk) {
    response += chunk.toString();
  });
  res.on('end', function () {
    return exits.success(response.toString());
  });
  res.on('error', function (err) {
    return exits.error(err);
  });
});
req.on('error', function (err) {
  return exists.error(err);
})
req.write(data);
req.end();