// Dependencies
var _ = require('lodash');
var Github = require('github');
var Machine = require('machine');



var github = new Github({
  version: '3.0.0',
});

// Authenticate
github.authenticate({
  type: 'basic',
  username: inputs.username,
  password: inputs.password
});

Machine.build(require('./get-user-details'))({
  user: inputs.owner
}).exec({
  error: exits.error,
  success: function (user){

    // Now send the appropriate request to create a new repo:

    // http://mikedeboer.github.io/node-github/#repos.prototype.createFromOrg
    if (user.isOrganization) {
      return (function _ifOrganization(){
        github.repos.createFromOrg(_stripUndefinedKeys({
          has_wiki: false,
          has_issues: true,
          description: inputs.description||undefined,
          homepage: inputs.homepage||undefined,
          org: inputs.owner,
          name: inputs.repo,
          private: inputs.private||undefined
        }), function(err, data) {
          if (err) return exits.error(err);
          return exits.success(data);
        });
      })();
    }

    // Since the provided `owner` is not an organization, we must check that
    // it matches the username provided for authentication.  Otherwise this
    // won't work.
    if (inputs.owner !== inputs.username) {
      return exits.userMismatch();
    }

    // or http://mikedeboer.github.io/node-github/#repos.prototype.create
    github.repos.create(_stripUndefinedKeys({
      has_wiki: false,
      has_issues: true,
      description: inputs.description||undefined,
      homepage: inputs.homepage||undefined,
      name: inputs.repo,
      private: inputs.private||undefined
    }), function(err, data) {
      if (err) return exits.error(err);
      return exits.success(data);
    });

  }
});


/**
 * (just a helper function)
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */
function _stripUndefinedKeys(obj) {
  return _.pick(obj, function _stripKeysWithUndefinedValues(val) {
    return !_.isUndefined(val);
  });
}