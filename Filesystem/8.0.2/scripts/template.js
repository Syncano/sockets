var thisPack = require('../');
var MPStrings = require('machinepack-strings');

// Read template from disk
thisPack.read({
  source: inputs.source
}).exec({
  error: exits.error,
  doesNotExist: exits.noTemplate,
  success: function (templateStr) {
    MPStrings.template({
      templateStr: templateStr,
      data: inputs.data
    }).exec({
      error: exits.error,
      missingData: exits.missingData,
      couldNotRender: exits.couldNotRender,
      success: function (renderedStr) {
        thisPack.write({
          destination: inputs.destination,
          string: renderedStr,
          force: inputs.force
        }).exec({
          error: exits.error,
          alreadyExists: exits.alreadyExists,
          success: exits.success
        });
      }
    });
  }
});