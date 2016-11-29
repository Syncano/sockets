if (inputs.number < 0) {
  return exits.imaginary(Math.sqrt(-1*inputs.number));
}
return exits.success(Math.sqrt(inputs.number));