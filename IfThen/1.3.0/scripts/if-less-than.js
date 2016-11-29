if (inputs.isInclusive){
  if (inputs.a <= inputs.b) {
    return exits.success();
  }
  return exits.otherwise();
}
if (inputs.a < inputs.b) {
  return exits.success();
}
return exits.otherwise();