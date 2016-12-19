var marked = require('marked');

// For full list of options, see:
//  • https://github.com/chjj/marked
var markedOpts = {
  sanitize: inputs.escapeHtml,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  smartypants: false,
};

// If `compileCodeBlock` lifecycle callback was provided, attach the `highlight` option.
if (inputs.compileCodeBlock) {
  /**
   * A lifecycle callback provided by `marked` to perform syntax highlighting on code blocks.
   *
   * Here's where marked actually makes the call:
   *  • https://github.com/chjj/marked/blob/v0.3.5/lib/marked.js#L766
   *
   * @param  {String}   code [the section of code to pass to the highlighter]
   * @param  {String}   lang [the programming language specified in the code block; e.g. 'javascript']
   * @param  {Function} next
   */
  markedOpts.highlight = function (code, lang, next) {
    inputs.compileCodeBlock({
      codeBlockContents: code,
      programmingLanguage: lang
    }).exec(next);
  };
}

// Now actually compile the markdown to HTML.
marked(inputs.mdString, markedOpts, function afterwards (err, htmlString) {
  if (err) { return exits.error(err); }
  return exits.success(htmlString);
});