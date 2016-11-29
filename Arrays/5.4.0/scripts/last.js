if (inputs.array.length===0) {
  return exits.notFound();
}
return exits.success(inputs.array[inputs.array.length-1]);