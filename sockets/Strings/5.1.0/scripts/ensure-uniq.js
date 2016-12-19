var _ = require('lodash');

var potentiallyUniqueStr = inputs.string;

// The string is not unique until none of the other strings in the set have the same name.
while (_.any(inputs.existingStrings, function doesItMatch(existingStr) {
  // Either case-sensitive or not.
  if (inputs.caseSensitive) {
    return existingStr === potentiallyUniqueStr;
  }
  return existingStr.toLowerCase() === potentiallyUniqueStr.toLowerCase();
}) ){

  // If the last part of the string is one or more numerals, we'll take a pass at incrementing
  // that existing number rather than just chaining more numbers onto the end.
  if (potentiallyUniqueStr.match(/[0-9]+$/g)) {
    potentiallyUniqueStr = potentiallyUniqueStr.replace(/[0-9]+$/, function(substr, index) {
      return ''+((+substr) + 1);
    });
  }
  // If not, just add a big fat "2" onto the end.
  else {
    potentiallyUniqueStr += '2';
  }
}

return exits.success(potentiallyUniqueStr);