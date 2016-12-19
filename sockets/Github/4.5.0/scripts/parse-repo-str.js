var _ = require('lodash');

inputs.string = _.trimLeft(inputs.string, '/');
var owner = inputs.string.split('/')[0];
var name = inputs.string.split('/')[1];
var branch = 'master';

if (~name.indexOf('#')) {
  branch = name.split('#')[1];
  name = name.split('#')[0];
}

return exits.success({
  owner: owner,
  repo: name,
  branch: branch
});