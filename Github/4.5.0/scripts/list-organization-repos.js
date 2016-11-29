var Github = require('github');

var limit = inputs.limit;
var skip = inputs.skip;

try {
  var github = new Github({
    version: '3.0.0'
  });

  if (inputs.username && inputs.password) {
    // Authenticate
    github.authenticate({
      type: 'basic',
      username: inputs.username,
      password: inputs.password
    });
  }

  github.repos.getFromOrg({
    org: inputs.owner,
    per_page: limit,
    page: Math.ceil(skip / limit)
  }, function(err, data) {
    if (err) return exits(err);
    else return exits.success(data);
  });
}
catch (e) {
  return exits.error(e);
}