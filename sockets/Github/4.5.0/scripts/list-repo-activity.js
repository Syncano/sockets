var Github = require('github');

try {
  var github = new Github({
    version: '3.0.0'
  });

  github.events.getFromRepo({
    repo: inputs.repo,
    user: inputs.owner
  }, function(err, data) {
    if (err) return exits(err);
    else return exits.success(data);
  });
}
catch (e) {
  return exits.error(e);
}