var Github = new require('github');

try {
  var github = new Github({
    version: '3.0.0',
  });

  github.repos.getCommits({
    repo: inputs.repo,
    user: inputs.owner,
    path: inputs.path
  }, function(err, data) {
    if (err) {
      if (typeof err === 'object' && +err.code === 400) {
        err.status = 400;
        return exits.badRequest(err);
      }
      return exits.error(err);
    }

    return exits.success(data);
  });
}
catch (e) {
  return exits.error(e);
}