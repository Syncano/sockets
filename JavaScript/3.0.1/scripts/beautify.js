var beautify = require('js-beautify').js;
return exits.success(beautify(inputs.code, {
  indent_size: inputs.numSpaces,
  indent_char: ' ',
  indent_with_tabs: inputs.useTabs
}));