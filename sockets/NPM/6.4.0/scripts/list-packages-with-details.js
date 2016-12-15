var async = require('async');
var NPM = require('../');


NPM.listPackages({
  query: inputs.query
}).exec(function (err, npmPackageNames) {
  if (err) { return exits.error(err); }

  // Now expand each module with full results directly
  // from the npm registry.
  var pkgInfos = [];

  async.each(
    npmPackageNames,

    function iteratee(packageName, next) {

      NPM.fetchInfo({
        packageName: packageName
      }).exec(function (err, pkgInfo) {
        if (err) { return next(err); }

        var metadata;
        try {

          var rawJsonStr = JSON.stringify(pkgInfo);

          metadata = NPM.parsePackageJson({ json: rawJsonStr }).execSync();

          // Attach raw json string
          metadata.rawJson = rawJsonStr;

        } catch (e){ return next(e); }

        pkgInfos.push(metadata);

        return next();

      });
    },//</iteratee>

    // ~∞%°
    function afterwards(err) {
      if (err) { return exits.error(err); }
      return exits.success(pkgInfos);
    }
  );//</async.each>
});//</listPackages()>