var statuscake = require("statuscake");
statuscake
  .username(inputs.statusCakeUser)
  .key(inputs.apiKey)
  .tests(function (err, data) {
    if (err) {
      return exits.error(err);
    }
    if (undefined !== data.ErrNo && 0 === data.ErrNo) {
      return exits.wrongOrNotUser(data.Error);
    }
    return exits.success(data);
  });