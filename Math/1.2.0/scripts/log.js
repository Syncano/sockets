if (inputs.number <= 0) {
  return exits.invalidLog();
}
if (inputs.base <= 0 || inputs.base === 1) {
  return exits.invalidBase();
}
return exits.success(Math.log(inputs.number) / Math.log(inputs.base));