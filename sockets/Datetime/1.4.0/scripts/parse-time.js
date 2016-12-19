var Moment = require('moment');

// Parse the time string as an hour of a particularly boring day
// and timezone (January 1, 2000 GMT) for simplicity
var momentObj = Moment(Date.parse('1/1/0000 ' + inputs.timeString + ' GMT-0000'));
momentObj.utc();

if (!momentObj.isValid()) {
  return exits.couldNotParse();
}

return exits.success({
  hour: momentObj.hour(),
  minute: momentObj.minute(),
  second: momentObj.second(),
  millisecond: momentObj.millisecond()
});