var jdata;

try {
  jdata= JSON.stringify(inputs.object);
}
catch (e){
  return exits.parseFailure(e);
}

return exits.success({
  description: "Object succesfully converted.",
  data: jdata
});