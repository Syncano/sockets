var params = {};
// Mergind given objects
_.merge(params, inputs);
// Make API call
urlshortener.url.get(params, function(err, response) {
  if (err) {
    if (!err.code) {
      return exits.error(err);
    }
    switch (err.code) {
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