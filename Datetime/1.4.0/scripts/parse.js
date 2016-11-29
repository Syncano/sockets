var MomentTz = require('moment-timezone');

// Build moment date using GMT in order to check validity
// (JSON-stringified datetimes are always encoded using the GMT timezone)
var momentObj = MomentTz.tz(Date.parse(inputs.datetime), 'Etc/Greenwich');
if (!momentObj.isValid()) {
  return exits.invalidDatetime();
}

// Extract the absolute JS timestamp
// (# of milliseconds since Jan 1, 1970 at midnight, GMT)
var jsTimestamp = momentObj.valueOf();
return exits.success(jsTimestamp);