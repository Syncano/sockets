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
var momentObj = MomentTz.tz(inputs.timestamp, foundTimezone);
if (!momentObj.isValid()) {
  return exits.couldNotParse();
}

return exits.success({
  month: momentObj.month()+1,
  date: momentObj.date(),
  year: momentObj.year(),
  dayOfWeek: momentObj.format('dddd'),
  hour: momentObj.hour(),
  minute: momentObj.minute(),
  second: momentObj.second(),
  millisecond: momentObj.millisecond(),
  timezone: foundTimezone
});