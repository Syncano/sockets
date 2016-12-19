// If using the `isInclusive` flag, check whether a <= b.
if (inputs.isInclusive){

  // If so, return `true` through the `success` exit.
  if (inputs.a <= inputs.b) {
    return exits.success(true);
  }

  // Otherwise, return `false` through the `success` exit.
  return exits.success(false);
}

// If not using the `isInclusive` flag, check whether a < b.
// If so, return `true` through the `success` exit.
if (inputs.a < inputs.b) {
  return exits.success(true);
}

// Otherwise, return `false` through the `success` exit.
return exits.success(false);