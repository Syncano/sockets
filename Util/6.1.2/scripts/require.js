var path = require('path');

var absPath = path.resolve(process.cwd(), inputs.path);
try {
  var result = require(absPath);
  return exits.success(result);
}
catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') { return exits.moduleNotFound(e); }
  else { return exits.couldNotLoad(e); }
}