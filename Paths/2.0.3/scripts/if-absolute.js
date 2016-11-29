// Use `path-is-absolute` polyfill for Node <= 0.12
var pathIsAbsolute = require('path-is-absolute');

if (pathIsAbsolute(inputs.path)) {
  return exits.success();
}
return exits.notAbsolute();