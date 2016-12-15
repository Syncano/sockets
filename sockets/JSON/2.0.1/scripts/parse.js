var parsedJson;
try {
  parsedJson = JSON.parse(inputs.json);
}
catch (e){
  return exits.couldNotParse(e);
}
return exits.success(parsedJson);