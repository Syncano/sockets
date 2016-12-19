var path = require('path');
var Filesystem = require('@treelinehq/treelinehq/machinepack-fs');

// Resolve paths to source and working directory.
inputs.srcDir = path.resolve(inputs.srcDir);
inputs.workingDir = inputs.workingDir ? path.resolve(inputs.workingDir) : path.resolve(inputs.srcDir, '.tmp/processing');

inputs.prodPkgDescription = inputs.prodPkgDescription || 'This package contains the production-compressed release of an asset package (i.e. shared LESS stylesheets, client-side JavaScript files, fonts, and/or images).';
inputs.author = inputs.author || '';
inputs.license = inputs.license || '';
if (!inputs.copyright && inputs.author) {
  inputs.copyright = 'Copyright &copy; 2015, ' + inputs.author;
}

Filesystem.write({
  destination: path.resolve(inputs.workingDir, 'README.md'),
  string: '# ' + inputs.prodPkgName + '

' + (inputs.prodPkgDescription ? inputs.prodPkgDescription + '

' : '') + (inputs.license ? inputs.license + '
' : '') + (inputs.copyright),
  force: true
}).exec({
  error: exits.error,
  success: function() {

    Filesystem.writeJson({
      json: {
        "name": inputs.prodPkgName,
        "version": inputs.prodPkgVersion,
        "description": inputs.prodPkgDescription,
        "dependencies": {},
        "author": inputs.author,
        "license": inputs.license,
        "homepage": inputs.homepageUrl,
      },
      destination: path.resolve(inputs.workingDir, 'package.json'),
      force: true
    }).exec({
      error: exits.error,
      success: function() {
        return exits.success();
      }
    });
  }
});