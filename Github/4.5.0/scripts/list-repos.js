var Github = require('github');

var limit = inputs.limit || 30;
var skip = inputs.skip || 0;

var github = new Github({
  version: '3.0.0'
});

github.repos.getFromUser({
  user: inputs.owner,
  per_page: limit,
  page: Math.ceil(skip / limit)
}, function(err, data) {
  if (err) return exits.error(err);
  return exits.success(data);
});