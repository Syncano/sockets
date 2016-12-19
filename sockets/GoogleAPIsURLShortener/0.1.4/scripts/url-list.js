var params = {};
// Mergind given objects
_.merge(params, inputs);
// Make API call
urlshortener.url.list(params, function(err, response) {
  if (err) {
    console.log(err);
    if (!err.code) {
      return exits.error(err);
    }
    switch (err.code) {
      case 401:
        return exits.unauthorized(err);
        break;
      case 400:
        return exits.invalidParameter(err);
        break;
      default:
        return exits.error(err);
        break;
    }
  }
  return exits.success(response);
});