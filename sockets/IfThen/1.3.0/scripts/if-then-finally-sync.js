var result;

if (inputs.bool) {
  result = inputs.then().execSync();
}
else {
  result = inputs.orElse().execSync();
}

return exits.success(result);