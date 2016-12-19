if (inputs.index < 0) {
  return exits.error('Index must be least zero.');
}
if (inputs.array.length < inputs.index) {
  return exits.notFound();
}

// Insert item
inputs.array.splice(inputs.index, 0, inputs.value);

return exits.success(inputs.array);