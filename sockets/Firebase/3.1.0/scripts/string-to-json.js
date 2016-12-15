var jdata;

try {
  jdata= JSON.parse(inputs.string);
}
catch (e){
  return exits.parseFailure(e);
}

return exits.success({
  description: "String succesfully converted.",
  data: jdata
});