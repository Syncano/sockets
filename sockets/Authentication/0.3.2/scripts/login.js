var Session = require('machinepack-session');

Session.save({
  key: 'me',
  value: inputs.id
}).setEnvironment({
  req: env.req
}).exec({
  error: exits.error,
  success: exits.success
});