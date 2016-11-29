var Proc = require('machinepack-process');

// Ensure destination is an absolute path.
inputs.destination = require('path').resolve(inputs.destination);

Proc.spawn({
  command: 'git clone ' + inputs.remote + ' ' + inputs.destination
}, {
  error: function (err) {
    // always seems to be `killed: false`, `code: 128`, `signal: null`
    try {
      if (err.message.match(/Permission denied/)) {
        return exits.forbidden(err);
      }
      if (err.message.match(/already exists and is not an empty directory/)) {
        return exits.alreadyExists(err);
      }
    }
    catch (e){}
    return exits.error(err);
  },
  success: function (outs) {

    // If a specific branch was not specified, then we're done.
    if (!inputs.branch) {
      return exits.success();
    }

    // But if it was, then we need to check out that branch.
    Proc.spawn({
      command: 'git checkout '+inputs.branch,
      dir: inputs.destination
    }).exec({
      error: function (err) {
        return exits.error(err);
      },
      success: function () {
        return exits.success();
      }
    });

  }
});