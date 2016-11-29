var params = {};
if (inputs.scope && _.isArray(inputs.scope)) {
  params.scope = inputs.scope;
}

if (inputs.accessType && _.isString(inputs.accessType)) {
  params.access_type = inputs.accessType;
}
if (!params.scope) {
  params.scope = ['https://www.googleapis.com/auth/plus.me'];
}

try {
  var oauth2Client = require('../lib/getOAuth2Client')(inputs);
  return exits.success(oauth2Client.generateAuthUrl(params || {}));
} catch(err) {
  return exits.error(err);
}