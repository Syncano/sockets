var async = require('async');
var Filesystem = require('machinepack-fs');
var Markdown = require('../');


Filesystem.read({ source: inputs.src }).exec(function (err, mdString) {
  if (err) { return exits.couldNotRead(err); }

  async.auto({

    htmlString: function (next) {
      Markdown.compileToHtml({
        mdString: mdString,
        escapeHtml: inputs.escapeHtml,
        compileCodeBlock: inputs.compileCodeBlock
      }).exec(function (err, htmlString) {
        if (err) { return next({ output: err, exit: 'couldNotCompile' }); }
        else { return next(undefined, htmlString); }
      });
    },//</async.auto::htmlString>

    metadata: function (next) {
      Markdown.parseDocmetaTags({
        mdString: mdString
      }).exec(function (err, metadata) {
        if (err) { return next({ output: err, exit: 'couldNotParse' }); }
        else { return next(undefined, metadata); }
      });
    }//</async.auto::metadata>

  }, function afterwards (err, asyncAutoResults) {
    if (err && err.exit==='couldNotCompile') { return exits.couldNotCompile(err.output); }
    else if (err && err.exit==='couldNotParse') { return exits.couldNotParse(err.output); }
    else if (err) { return exits.error(err); }

    Filesystem.write({
      destination: inputs.dest,
      string: asyncAutoResults.htmlString,
      force: true
    }).exec(function(err) {
      if (err) { return exits.couldNotWrite(err); }
      return exits.success(asyncAutoResults.metadata);
    });//</Filesystem.write()>
  });//</afterwards from async.auto()>
});//</Filesystem.readFile()>