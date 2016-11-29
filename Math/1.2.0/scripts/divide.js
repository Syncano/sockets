if (inputs.b === 0) {
  return exits.invalidDenominator();
}
return exits.success(inputs.a / inputs.b);