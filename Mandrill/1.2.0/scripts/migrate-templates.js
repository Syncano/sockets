var Machine = require('machine');
var async = require('async');

Machine.build(require('./list-templates'))
.configure({
  apiKey: inputs.srcApiKey
})
.exec({
  error: exits.error,
  success: function (templates) {

    async.each(templates, function (template, next) {

      // Add api key
      template.apiKey = inputs.destApiKey;

      Machine
      .build(require('./add-template'))
      .configure(template)
      .exec({
        error: next,
        success: function (newTemplate) {
          next();
        }
      });
    }, exits);
  }
});