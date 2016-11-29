var result;
if (!Array.isArray(inputs.collection)) { return exits.error(); }
else if (!inputs.collection.length) { return exits.emptyError(); }
try {
  if (inputs.include && inputs.end) { var end = inputs.end + 1; }
  result = inputs.collection.slice(inputs.start, end||inputs.end||inputs.collection.length);
} catch (err) { return exits.error(err); }

return exits.success(result);