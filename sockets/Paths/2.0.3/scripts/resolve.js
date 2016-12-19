var result;

// If `from` was provided, resolve `path` from it.
// (if `from` is a relative path it will be resolved relative to pwd first)
if (inputs.from) {
  result = require('path').resolve(inputs.from, inputs.path);
}
// Otherwise, use pwd.
else {
  result = require('path').resolve(inputs.path);
}

return exits.success(result);