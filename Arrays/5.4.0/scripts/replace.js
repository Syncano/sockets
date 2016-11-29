if (inputs.index < 0) {
  return exits.error('Index must be least zero.');
}
if (inputs.array.length < inputs.index) {
  return exits.notFound();
}

// Replace item
inputs.array.splice(inputs.index, 1, inputs.value);

return exits.success(inputs.array);