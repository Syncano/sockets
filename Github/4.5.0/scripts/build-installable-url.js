// Dependencies
var _ = require('lodash');
var util = require('util');

return exits.success(util.format('git+https://%s:x-oauth-basic@github.com/%s/%s.git',inputs.personalAccessToken, inputs.owner, inputs.repo));