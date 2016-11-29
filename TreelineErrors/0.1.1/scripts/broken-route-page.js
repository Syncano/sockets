var path = require('path');
var Filesystem = require('machinepack-fs');

Filesystem.read({
  source: path.resolve(__dirname, '../html/broken-route.html')
}).exec({
  error: exits.error,
  success: exits.success
});