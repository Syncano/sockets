// Dependencies
var _ = require('lodash');
var Github = require('github');

var github = new Github({
  version: '3.0.0',
});

// http://mikedeboer.github.io/node-github/#user.prototype.get
github.user.getFrom({
  user: inputs.user
}, function(err, data) {
  if (err) return exits.error(err);

  // Marshal data into nicer format
  var userProfile = {};
  try {

    // Basic info
    userProfile.username = data.login;
    userProfile.isOrganization = !!data.type.match(/organization/i);
    userProfile.name = data.name;
    userProfile.email = data.email;
    userProfile.avatarUrl = data.avatar_url;

    // Details
    userProfile.blogUrl = data.blog;
    userProfile.githubProfileUrl = data.html_url;
    userProfile.location = data.location;
    userProfile.company = data.company;
    userProfile.bio = data.bio;
    userProfile.numFollowers = data.followers;
    userProfile.numPublicRepos = data.public_repos;
    userProfile.numPublicGists = data.public_gists;
    userProfile.isHireable = !!data.hireable;
  }
  catch (e){
    return exits.error(e);
  }

  return exits.success(userProfile);
});