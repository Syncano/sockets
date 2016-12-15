return exits.success(
  require('path').resolve(process.env[
    (process.platform == 'win32') ?
    'USERPROFILE' :
    'HOME'
  ])
);