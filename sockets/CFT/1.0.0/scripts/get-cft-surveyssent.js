// require a few modules
var request = require('request');
var fbdata = '';
// Add more objects to the inputs object and set up a few defaults
var options = {
  "rejectUnauthorized": false,
  "url": "https://clientfeedbacktool.com/api/SurveysSent/",
  "method": "Get",
  "gzip": true,
  "qs": {
    "output": "json",
    "UserName": inputs.userName,
    "Password": inputs.password,
    // Accepts 1 or 0
    "Flat": 0,
    // Dates should be in the form YYYYMMDD
    // "FromDate": inputs.fromDate,
    // "ToDate": inputs.toDate,

    //if you only want stats
    "ShowStatsOnly": 0

  }
};

request(options)
  .on('data', function (chunk) {
    fbdata += chunk;
  })
  .on('end', function () {
    return exits.success(JSON.parse(fbdata).List);
  })
  .on('error', function (err) {
    return exits.error(e);
  });