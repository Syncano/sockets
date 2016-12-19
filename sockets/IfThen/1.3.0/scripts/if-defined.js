if (typeof(inputs.value) === 'undefined') {
  return exits.otherwise();
}
return exits.success(inputs.value);