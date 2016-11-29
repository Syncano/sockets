var params = {
  resource: {}
};
var inputParams = _.clone(inputs);
if (inputParams.fields && inputParams.fields.length > 0) {
  params.fields = inputParams.fields;
  delete inputParams.fields; // Have to remove this
}
// Check and add key
if (inputParams.key && inputParams.key.length > 0) {
  params.key = inputParams.key;
  delete inputParams.key;
}
_.merge(params.resource, inputParams);
urlshortener.url.insert(params, function(err, response) {
  if (err) {
    if (!err.code) {
      return exits.errro(err);
    }
    switch(err.code) {
      case 400:
        return exits.invalidParameter(err);
        break;
      case 403:
        return exits.dailyLimitExceededUnreg(err);
        break;
      default:
          return exits.error(err);
        break;
    }
  }
  return exits.success(response);
});