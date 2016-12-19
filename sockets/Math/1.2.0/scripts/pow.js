// If the number is negative, and it's being raised to a
// fractional power, we'll calculate the imaginary factor instead.
if (inputs.number < 0 && Math.floor(inputs.exponent) !== inputs.exponent) {
  return exits.imaginary(Math.pow(-1*inputs.number, inputs.exponent));
}
return exits.success(Math.pow(inputs.number, inputs.exponent));