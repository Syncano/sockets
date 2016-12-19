var Github = require('github');
var _ = require('lodash');

var github = new Github({
  version: '3.0.0'
});

github.repos.getCommits({
  repo: inputs.repo,
  user: inputs.owner
}, function(err, data) {
  try {
    if (err) return exits.error(err);

    var commits = [];

    _.each(data, function(commitData){
      var formattedCommit = {
        author: {
          name: commitData.commit.author.name
        },
        commitUrl: commitData.html_url,
        timestamp: commitData.commit.author.date
      };
      if (!_.isNull(commitData.author) && !_.isUndefined(commitData.author)) {
        formattedCommit.author.username = commitData.author.login;
        formattedCommit.author.avatarUrl = commitData.author.avatar_url;
        formattedCommit.author.profileUrl = commitData.author.html_url;
      }
      commits.push(formattedCommit);
    });

    return exits.success(commits);
  }
  catch (e) {
    return exits.error(e);
  }
});