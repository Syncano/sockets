var convertToEcmascriptCompatibleVarname = require('convert-to-ecmascript-compatible-varname');

var result;
try {
  result = convertToEcmascriptCompatibleVarname(inputs.string);
}
catch (e) {

  // If `force` is not enabled, then handle this error.
  if (!inputs.force) {
    if (e.code === 'RESERVED') {
      return exits.collidesWithReservedWord(e);
    }
    return exits.error(e);
  }

  // Otherwise `force` is enabled so we need to keep trucking.
  //
  // We'll try a rougher guess, converting the provided string to
  // be alphanumeric.  In the absolute worst-case, use `x`.
  try {
    result = inputs.string.replace(/^[^a-zA-Z\$\_]/, '').replace(/^.[^a-zA-Z0-9]*/, '');
    result = result || 'x';

    // Now run `convertToEcmascriptCompatibleVarname` one more time in case
    // there is still a collision with a reserved word.
    try {
      result = convertToEcmascriptCompatibleVarname(result);
      return exits.success(result);
    }
    // If this doesn't work, just use `x`.
    catch (e2) {
      return exits.success('x');
    }
  }
  catch (e1) {
    return exits.error(e);
  }
}

return exits.success(result);