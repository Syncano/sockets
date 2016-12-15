var request = require('request');
var os = require('os');
var path = require('path');
var zlib = require('zlib');
var tar = require('tar');
var Urls = require('machinepack-urls');
var semver = require('semver');

if (!semver.valid(inputs.version)) {
  return exits.invalidSemVer();
}


// Build a sanitized version of the provided registry URL (i.e. with "http://")
// (default to public NPM registry)
var registryUrl = Urls.sanitize({
  url: inputs.registry || 'https://registry.npmjs.org',
}).execSync();

// Build the URL where the remote package tarball lives.
var remoteFilename = inputs.name + '-' + inputs.version + '.tgz';
var uri = Urls.buildUrlFromTemplate({
  urlTemplate: registryUrl+'/:name/-/:remoteFilename',
  data: {
    name: inputs.name,
    remoteFilename: remoteFilename
  },
}).execSync();

(function _requestPkgFromNPMAndExtractResAsStream(done){
  // Set up a spinlock, just to be safe.
  var alreadyFinished;

  // Figure out the appropriate path to a directory where the package will
  // be extracted after it is downloaded.  If no explicit `destination` path
  // was specified, then use the path to a new subfolder within the operating
  // system's `/tmp` directory.
  var destinationPath = (function (){
    if (typeof inputs.destination !== 'undefined') {
      return path.resolve(inputs.destination);
    }
    else {
      return path.resolve(os.tmpDir(), inputs.name + '-' + inputs.version);
    }
  })();

  var gunner = zlib.createGunzip()
  .once('error', function (err){
    if (alreadyFinished) { return; }
    alreadyFinished = true;
    return done(err||new Error('gzip extraction error'));
  });

  var extractor = tar.Extract({ path: destinationPath })
  .once('error', function (err){
    if (alreadyFinished) { return; }
    alreadyFinished = true;
    return done(err||new Error('tar extraction error'));
  })
  .once('end', function() {
    if (alreadyFinished) { return; }
    alreadyFinished = true;
    return done(null, path.join(destinationPath, 'package'));
  });

  var httpClientRequest = request.get(uri);
  httpClientRequest.once('error', function (err){
    if (alreadyFinished) { return; }
    alreadyFinished = true;
    return done(err||new Error('HTTP request stream error'));
  });
  httpClientRequest.pipe(gunner).pipe(extractor);
})(function afterwards(err, resultPath){
  if (err) { return exits.error(err); }
  return exits.success(resultPath);
});