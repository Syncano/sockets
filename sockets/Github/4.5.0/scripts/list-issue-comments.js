var Github = require('github');
var _ = require('lodash');

var github = new Github({
  version: '3.0.0'
});

github.issues.getComments({
  repo: inputs.repo,
  user: inputs.owner,
  number: inputs.issueNumber
}, function(err, data) {
  try {
    if (err) return exits.error(err);
    var comments = _.map(data, function(commentData){
      return {
        author: {
          username: commentData.user.login,
          avatarUrl: commentData.user.avatar_url,
          profileUrl: commentData.user.html_url,
        },
        body: commentData.body,
        timestamp: commentData.created_at,
        id: commentData.id,
        url: commentData.html_url
      };
    });

    return exits.success(comments);
  }
  catch (e) {
    return exits.error(e);
  }
});