var Moment = require('moment');

var momentObj = Moment(Date.parse(inputs.monthDayYear));

if (!momentObj.isValid()) {
  return exits.couldNotParse();
}

return exits.success({
  month: momentObj.month()+1,
  date: momentObj.date(),
  year: momentObj.year(),
  dayOfWeek: momentObj.format('dddd')
});