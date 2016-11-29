var Client = require('ssh2').Client;
  // Debugging? Un-comment the console.log lines.
  var conn = new Client();

  conn.on('ready', function() {
  // console.log('Client :: ready');
  conn.exec(inputs.command, function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      // console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', function(data) {
      // console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      // console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: inputs.hostName,
  port: inputs.port,
  username: inputs.userName,
  password: inputs.password
});


  return exits.success();