var discovery = google.discovery('v1');
var params = {};
_.merge(params, inputs);
discovery.apis.list(params, function(err, result) {
  if (err) {
    return exits.error(err);
  }
  return exits.success(result);
});