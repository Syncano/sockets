var thisPack = require('../');

thisPack.status({
  dir: inputs.destination
}).exec({
  error: exits.error,
  noSuchDir: function () {
    thisPack.clone({
      destination: inputs.destination,
      remote: inputs.remote,
      branch: inputs.branch
    }).exec(exits);
  }, //</status.noSuchDir>
  success: function (status){
    thisPack.pull({
      destination: inputs.destination,
      remote: inputs.remote,
      branch: inputs.branch
    }).exec(exits);
  } //</status.success>
}); // </status>