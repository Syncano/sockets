var _ = require('lodash');
var MomentTz = require('moment-timezone');

// Default to current date/time/zone if no timestamp was provided.
inputs.timestamp = _.isUndefined(inputs.timestamp) ? (new Date()).getTime() : inputs.timestamp;

// Validate this is a known timezone
// (case-insensitive)
var foundTimezone = _.find(MomentTz.tz.names(), function (timezoneName){
  if (inputs.timezone.toLowerCase().match(timezoneName.toLowerCase())) {
    return timezoneName;
  }
});
if (!foundTimezone) {
  return exits.unknownTimezone();
}

// Build moment date using appropriate timezone
var momentObj = MomentTz.tz(inputs.timestamp, foundTimezone);
if (!momentObj.isValid()) {
  return exits.invalidDatetime();
}

// Format date
var resultStr = momentObj.format(inputs.formatString);
return exits.success(resultStr);