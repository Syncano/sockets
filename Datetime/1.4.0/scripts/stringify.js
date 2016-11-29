var _ = require('lodash');
var MomentTz = require('moment-timezone');

// Default to current date/time/zone if no timestamp was provided.
inputs.timestamp = _.isUndefined(inputs.timestamp) ? (new Date()).getTime() : inputs.timestamp;

// Build moment date using appropriate timezone
var momentObj = MomentTz.tz(inputs.timestamp, 'Etc/Greenwich');
if (!momentObj.isValid()) {
  return exits.invalidDatetime();
}

// Format date
var resultStr = momentObj.toDate().toJSON();
return exits.success(resultStr);