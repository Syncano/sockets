var jsonString;
try {
  jsonString = JSON.stringify(inputs.value);
}
catch (e){
  return exits.couldNotStringify(e);
}
return exits.success(jsonString);