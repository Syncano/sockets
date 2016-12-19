var Github = require('github');

var github = new Github({
  version: '3.0.0',
});

github.repos.get({
  repo: inputs.repo,
  user: inputs.owner
}, function(err, data) {
  if (err) {
    if (_.isObject(err) && (+err.code)===403) {
      return exits.rateLimitExceeded(err.message);
    }
    return exits.error(err);
  }
  return exits.success(data);
});