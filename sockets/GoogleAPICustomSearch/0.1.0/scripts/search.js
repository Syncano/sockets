var params = {};
_.merge(params, inputs);
customsearch.cse.list(params, function(err, result) {
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
  return exits.success(result);
});