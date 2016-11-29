var oauth2Client = require('../lib/getOAuth2Client')(inputs);

oauth2Client.getToken(inputs.code, function(err, tokens) {
  if (err) {
    if (!err.code) {
      return exits.error(err);
    }
    console.log(err);
    switch(err.code) {
      case 400:
        return exits.invalidRequest(err);
        break;
      case 401:
        return exits.invalidToken(err);
        break;
      default:
        return exits.error(err);
        break;
    }
    console.log(err);
  }
  return exits.success(tokens);
});