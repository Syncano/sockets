var Machine = require('machine');
var async = require('async');

Machine.require('./list-templates')
.configure({
  apiKey: inputs.apiKey
})
.exec({
  error: exits.error,
  success: function (templates) {
    async.each(templates, function (template, next) {
      Machine
      .require('./delete-template')
      .configure({
        apiKey: inputs.apiKey,
        name: template.name
      })
      .exec({
        error: next,
        success: function (deletedTemplate) {
          next();
        }
      });
    }, exits);
  }
});