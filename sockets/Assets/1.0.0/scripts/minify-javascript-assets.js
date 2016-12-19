var path = require('path');
var Arrays = require('@treelinehq/treelinehq/machinepack-arrays');
var Filesystem = require('@treelinehq/treelinehq/machinepack-fs');
var Javascript = require('@treelinehq/treelinehq/machinepack-javascript');

// Resolve relative dir
inputs.dir = path.resolve(inputs.dir);

// List contents of a directory on the local filesystem.
Filesystem.ls({
  dir: inputs.dir,
  depth: 10,
  includeFiles: true,
  includeDirs: false,
  includeSymlinks: false,
  includeHidden: false
}).exec({
  // An unexpected error occurred.
  error: exits.error,
  // The specified source js path does not exist.
  doesNotExist: function() {
    return exits.doesNotExist();
  },
  // OK.
  success: function(dirContents) {
    // Run some logic (the "iteratee") once for each item of an array, accumulating a single result.
    Arrays.reduce({
      array: dirContents,
      resultExample: 'a bunch of js code',
      initialValue: '',
      series: true,
      iteratee: function(_inputs, exits) {

        // console.log('

');
        // console.log('thisMachine: ',env.thisMachine());
        // console.log('Machine version: '+ env.thisMachine().constructor.inspect());
        // console.log('here are my inputs:: ',_inputs);
        // console.log('wtf where are my exits: ',exits);

        // If this is not a .js file, we'll skip it.
        if (path.extname(_inputs.item) !== '.js') {
          return exits.success();
        }

        // Read a file on disk as a string.
        Filesystem.read({
          source: _inputs.item,
        }).exec({
          // An unexpected error occurred.
          error: exits.error,
          // OK.
          success: function(fileContents) {
            // Accumulate the contents of this JavaScript file alongside
            // the already-accumulated JavaScript string we're building.
            return exits.success(_inputs.resultSoFar + fileContents + '

');
          },
        });
      }
    }).exec({
      // An unexpected error occurred.
      error: exits.error,
      // OK.
      success: function(finalAccumulatedJsString) {

        // Minify a string of JavaScript code.
        Javascript.minify({
          javascript: finalAccumulatedJsString,
        }).exec({
          error: exits.error,
          success: function(minifiedJsString) {
            return exits.success(minifiedJsString);
          }
        });
      },
    }); //</Arrays.reduce()
  },
}); // </Filesystem.ls()>