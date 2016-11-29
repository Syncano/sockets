var reduce = require('lodash.reduce');

var metadata = reduce(inputs.mdString.match(/<docmeta[^>]*>/igm)||[], function (memo, tag) {
  var name = tag.match(/name="([^">]+)"/i)[1];
  var value = tag.match(/value="([^">]+)"/i)[1];
  memo[name] = value;
  return memo;
}, {});

return exits.success(metadata);