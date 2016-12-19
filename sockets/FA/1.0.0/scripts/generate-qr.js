var tfa = require('2fa');
var QR = require('qr-image');
// build data
var data = 'otpauth://totp/' + encodeURIComponent(inputs.application + ' | ' + inputs.username)
       + '?secret=' + tfa.base32Encode(inputs.key);

// turn data into a QR code
var formatter = function(buf) {
  return 'data:image/png;base64,' + buf.toString('base64')
};
var qrOpts = { type: 'png' };
var pngStream = QR.image(data, qrOpts);
var pngData = [];
pngStream.on('data', function(d) { pngData.push(d); });
pngStream.on('end', function() {
  var png = Buffer.concat(pngData);
  return exits.success(formatter(png));
});