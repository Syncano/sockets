var Machine = require('machine');
var createClient = Machine.build(require('./create-client'));
var client = createClient({
  host: inputs.host,
  port: inputs.port,
  username: inputs.username,
  password: inputs.password,
}).execSync();
var options = {
  's': inputs.torrentUrl,
  'download_dir': inputs.downloadDir || 0,
  'path': inputs.path || ''
};
client.call('add-url', options, function(err, data) {
  if (err) {
    return exits.error(err);
  }
  return exits.success(data);
});