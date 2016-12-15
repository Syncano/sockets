// If the input valid is truthy, return `true` through the `success` exit.
if (inputs.value) {
  return exits.success(true);
}

// Otherwise return `false` through the `success` exit.
return exits.success(false);