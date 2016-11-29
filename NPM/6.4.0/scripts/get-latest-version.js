var _ = require('lodash');
var NPM = require('../');

if (inputs.packageName.match(/^@/)){
  return exits.error(new Error('This machine does not currently support scoped packages (e.g. @mikermcneil/foobar)'));
}

NPM.fetchInfo({
  packageName: inputs.packageName
}).exec({
  error: exits.error,
  packageNotFound: exits.packageNotFound,
  couldNotParse: exits.couldNotParse,
  success: function (npmPackageInfo){

    var latestPublishedVersion;
    try {
      var distTags = npmPackageInfo['dist-tags'];
      if (!_.isObject(distTags)) {
        return exits.couldNotParse(new Error('Missing or invalid `dist-tags` received from NPM.'));
      }
      latestPublishedVersion = distTags.latest;
    } catch (e) { return exits.couldNotParse(e); }

    if (!_.isString(latestPublishedVersion)) {
      return exits.couldNotParse(new Error('Missing or invalid `dist-tags.latest` version string received from NPM (it is claiming that `'+latestPublishedVersion+'` is the latest version)'));
    }

    return exits.success(latestPublishedVersion);
  }//</•-upon success::NPM.fetchInfo>
});//</NPM.fetchInfo()>