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
  if (inputs.caseInsensitive) {
    regexp = new RegExp(regexp, 'i');
  }
  else {
    regexp = new RegExp(regexp);
  }
} catch (e) {
  return exits.invalidRegexp(e);
}

var matches = inputs.string.match(regexp);
if (!matches) {
  return exits.notFound();
}

return exits.success({
  found: matches[0],
  at: matches.index
});