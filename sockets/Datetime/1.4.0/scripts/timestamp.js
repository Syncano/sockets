var _ = require('lodash');
var MomentTz = require('moment-timezone');

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
var momentObj = MomentTz.tz({
  hour: inputs.hour,
  minute: inputs.minute,
  second: inputs.second,
  millisecond: inputs.millisecond,
  day: inputs.date,
  month: inputs.month-1,
  year: inputs.year
}, foundTimezone);

if (!momentObj.isValid()) {
  return exits.invalidDatetime();
}

// Extract the absolute JS timestamp
// (# of milliseconds since Jan 1, 1970 at midnight, GMT)
var jsTimestamp = momentObj.valueOf();

return exits.success(jsTimestamp);