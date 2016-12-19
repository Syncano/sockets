// Attempt to convert the input value to a number.
var converted = +inputs.string;

// If the result is NaN, Infinity or -Infinity, trigger the `error` exit.
if (isNaN(converted) || converted === Infinity || converted === -Infinity) {
  return exits.error('The given string could not be converted to a number.');
}

// Otherwise return the converted value through the `success` exit.
return exits.success(converted);