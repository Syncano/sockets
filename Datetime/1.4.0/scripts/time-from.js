var MomentTz = require('moment-timezone');

// Build moment obj for `toWhen`
var toWhenObj = MomentTz.tz(new Date(inputs.toWhen), 'Etc/Greenwich');
if (!toWhenObj.isValid()) {
  return exits.invalidToWhen();
}

// Build moment obj for `fromWhen`
// (default to current date/time if no `fromWhen` timestamp was provided)
inputs.fromWhen = (typeof inputs.fromWhen === 'undefined') ? (new Date()).getTime() : inputs.fromWhen;
var fromWhenObj = MomentTz.tz(new Date(inputs.fromWhen), 'Etc/Greenwich');
if (!fromWhenObj.isValid()) {
  return exits.invalidFromWhen();
}

// Format final "time from" string
var resultStr = toWhenObj.from(fromWhenObj);
return exits.success(resultStr);