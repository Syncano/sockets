// Resolve path to styles directory
require('@treelinehq/treelinehq/machinepack-paths_1.2.0').resolve({
  "paths": [inputs.lessSrcDir]
}).exec({
  "error": function(resolvePathToStylesDirectory) {
    exits.error3(resolvePathToStylesDirectory);
  },
  "success": function(resolvePathToStylesDirectory) {
    // Resolve path to importer.less
    require('@treelinehq/treelinehq/machinepack-paths_1.2.0').resolve({
      "paths": [inputs.lessSrcDir, "importer.less"]
    }).exec({
      "error": function(resolvePathToImporterLess) {
        exits.error2(resolvePathToImporterLess);
      },
      "success": function(resolvePathToImporterLess) {
        // Compile stylesheet
        require('@treelinehq/treelinehq/machinepack-less_1.0.0').compileStylesheet({
          "source": resolvePathToImporterLess,
          "importPaths": [resolvePathToStylesDirectory],
          "minify": inputs.minify
        }).exec({
          "error": function(compileStylesheet) {
            exits.error(compileStylesheet);
          },
          "doesNotExist": function(compileStylesheet) {
            exits.doesNotExist(compileStylesheet);
          },
          "success": function(compileStylesheet) {
            exits.success(compileStylesheet);
          }
        });

      }
    });
  }
});