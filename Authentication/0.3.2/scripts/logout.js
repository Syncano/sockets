var Session = require('machinepack-session');

Session.del({
  key: 'me'
}).setEnvironment({
  req: env.req
}).exec({
  error: exits.error,
  success: exits.success
});