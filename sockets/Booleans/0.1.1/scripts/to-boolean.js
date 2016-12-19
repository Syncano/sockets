// Return `true` through the `success` exit for "true" and "1".
if (inputs.string === 'true' || inputs.string === '1') {
  return exits.success(true);
}
// Return `false` through the `success` exit for "false" and "0" and "".
if (inputs.string === 'false' || inputs.string === '0' || inputs.string === '') {
  return exits.success(false);
}
// Otherwise thrown an error
return exits.error('The given value could not be converted to a boolean.');