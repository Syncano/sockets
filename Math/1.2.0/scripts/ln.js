if (inputs.number <= 0) {
  return exits.invalidLog();
}
return exits.success(Math.log(inputs.number));