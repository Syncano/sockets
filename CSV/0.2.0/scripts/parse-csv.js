var parse = require('csv-parse');
var options = {};
if (inputs.hasHeaderRow) {options.columns = true;}
options.auto_parse = true;
options.ltrim = true;
options.rtrim = true;
options.skip_empty_lines = true;
parse(inputs.csvData, options, function(err, output) {
  if (err) {return exits.error(err);}
  return exits.success(output);
});