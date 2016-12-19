// If the input valid is undefined, return `false` through the `success` exit.
if (typeof(inputs.value) === 'undefined') {
  return exits.success(false);
}

// Otherwise return `true` through the `success` exit.
return exits.success(true);