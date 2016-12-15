var params = {};
_.merge(params, inputs);

var pageSpeed = google.pagespeedonline('v2');
pageSpeed.pagespeedapi.runpagespeed(params, function(err, result) {
  if (err) {
    return exits.error(err);
  }
  return exits.success(result);
});