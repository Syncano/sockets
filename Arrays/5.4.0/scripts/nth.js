var foundItem = inputs.array[inputs.index];
if (typeof foundItem === 'undefined') {
  return exits.notFound();
}
return exits.success(foundItem);