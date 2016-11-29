var params = {
  key: inputs.key
};
if (inputs.sort) {
  params.sort = inputs.sort;
}
if (inputs.fields) {
  params.fields = inputs.fields;
}
var webFonts = google.webfonts('v1');
webFonts.webfonts.list(params, function(err, result) {
  if (err) {
    if (!err.code) {
      return exits.error(err);
    }
    switch(err.code) {
      case 403:
        return exits.accessNotConfigured(err);
        break;
      default:
        return exits.error(err);
        break;
    }
  }
  return exits.success(result);
});