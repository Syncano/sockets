var angel = require('angellist');

// Init an AngelList object
angel.init(inputs.clientId, inputs.clientSecret);

var loginUrl = angel.getAuthUrl();

return exits.success(loginUrl);