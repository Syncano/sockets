var _ = require('lodash');

// Case-insensitive by default
if (_.isUndefined(inputs.caseInsensitive)) {
  inputs.caseInsensitive = true;
}

// Check that the regexp is valid
var regexp;
try {

  regexp = inputs.regexp;

  /////////////////////////////////////////////////////////
  // Skip this-- we want users to be able to provide an actual
  // regexp with all the things (i.e. should be able to use the
  // star and dot and ? operators, etc)
  /////////////////////////////////////////////////////////
  // Then escape the provided string before instantiating
  // regexp = _.escapeRegExp(regexp);
  /////////////////////////////////////////////////////////

  // Then construct it
  // (and if relevant, enable case-insensitivity)
  var modifiers = '';
  if (inputs.caseInsensitive) {
    modifiers += 'i';
  }
  if (inputs.global) {
    modifiers += 'g';
  }
  if (inputs.multiline) {
    modifiers += 'm';
  }
  if (modifiers.length) {
    regexp = new RegExp(regexp, modifiers);
  }
  else {
    regexp = new RegExp(regexp);
  }
} catch (e) {
  return exits.invalidRegexp(e);
}

var newString = inputs.string.replace(regexp, inputs.replacement);

return exits.success(newString);