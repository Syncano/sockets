// If the input valid is undefined, return `true` through the `success` exit.
if (typeof(inputs.value) === 'undefined') {
  return exits.success(true);
}

// Otherwise return `false` through the `success` exit.
return exits.success(false);