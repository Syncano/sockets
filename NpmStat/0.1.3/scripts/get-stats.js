var util = require('util');
var _ = require('lodash');
var Http = require('machinepack-http');
var Util = require('machinepack-util');

// TODO: validate start and end date inputs
// TODO: support configurable date range
var now = new Date();
var today = util.format('%s-%s-%s',
  now.getFullYear(),
  (now.getMonth()+1)<10?'0'+(now.getMonth()+1):(now.getMonth()+1),
  now.getDate()<10?'0'+now.getDate():now.getDate()
);
var dateRange = '2012-01-01:'+today;

console.log('date range:
', dateRange);

// Send an HTTP request and receive the response.
Http.sendHttpRequest({
  method: 'get',
  url: 'http://npm-stat.com/downloads/range/'+dateRange+'/'+inputs.packageName
}).exec({
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  },
  // OK.
  success: function(result) {

    var parsedData;
    try {
      parsedData = Util.parseJson({
        json: result.body,
        schema: {
          downloads: [{
            day: '2015-01-20',
            downloads: 100
          }]
        }
      }).execSync();
    }
    catch (e) {
      return exits.error(e);
    }

    // Expand the result data
    return exits.success({
      perDay: parsedData.downloads,
      total: _.reduce(parsedData.downloads, function (memo, day){
        return memo + day.downloads;
      }, 0)
    });
  },
});