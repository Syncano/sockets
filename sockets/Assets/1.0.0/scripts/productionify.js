// Source directory (path)
require('@treelinehq/treelinehq/machinepack-paths_1.2.0').resolve({
  "paths": [inputs.srcDir]
}).exec({
  "error": function(sourceDirectoryPath) {
    exits.error3(sourceDirectoryPath);
  },
  "success": function(sourceDirectoryPath) {
    // Read package.json
    require('@treelinehq/treelinehq/machinepack-fs_5.2.0').readJson({
      "source": sourceDirectoryPath + "/package.json",
      "schema": {
        version: "1.0.0",
        name: "@treelinehq/treeline-assets"
      }
    }).exec({
      "error": function(readPackageJson) {
        exits.error8(readPackageJson);
      },
      "doesNotExist": function(readPackageJson) {
        exits.doesNotExist(readPackageJson);
      },
      "couldNotParse": function(readPackageJson) {
        exits.couldNotParse(readPackageJson);
      },
      "success": function(readPackageJson) {
        // Production package name
        require('@treelinehq/treelinehq/machinepack-util_5.1.0').coalesce({
          "b": (readPackageJson && readPackageJson.name) + "-prod",
          "a": inputs.prodPkgName
        }).exec({
          "error": function(productionPackageName) {
            exits.error10(productionPackageName);
          },
          "success": function(productionPackageName) {
            // Tmp output directory (path)
            require('@treelinehq/treelinehq/machinepack-paths_1.2.0').resolve({
              "paths": [inputs.srcDir, ".tmp/processing"]
            }).exec({
              "error": function(tmpOutputDirectoryPath) {
                exits.error(tmpOutputDirectoryPath);
              },
              "success": function(tmpOutputDirectoryPath) {
                // Copy fonts (if relevant)
                require('../index').copyFonts({
                  "fontsSrcPath": sourceDirectoryPath + "/fonts",
                  "outputDir": tmpOutputDirectoryPath
                }).exec({
                  "error": function(copyFontsIfRelevant) {
                    exits.error2(copyFontsIfRelevant);
                  },
                  "success": function(copyFontsIfRelevant) {
                    // Copy images (if relevant)
                    require('../index').copyImages({
                      "imgSrcPath": sourceDirectoryPath + "/images",
                      "outputDir": tmpOutputDirectoryPath
                    }).exec({
                      "error": function(copyImagesIfRelevant) {
                        exits.error4(copyImagesIfRelevant);
                      },
                      "success": function(copyImagesIfRelevant) {
                        // Write README and package.json
                        require('../index').writeReadmeAndPackageJson({
                          "srcDir": sourceDirectoryPath,
                          "outputDir": tmpOutputDirectoryPath,
                          "prodPkgName": productionPackageName,
                          "prodPkgVersion": (readPackageJson && readPackageJson.version)
                        }).exec({
                          "error": function(writeREADMEAndPackageJson) {
                            exits.error5(writeREADMEAndPackageJson);
                          },
                          "success": function(writeREADMEAndPackageJson) {
                            // Write compiled JavaScript (if relevant)
                            require('../index').writeMinifiedJavascript({
                              "outputDir": tmpOutputDirectoryPath,
                              "jsSrcDir": sourceDirectoryPath + "/js"
                            }).exec({
                              "error": function(writeCompiledJavaScriptIfRelevant) {
                                exits.error6(writeCompiledJavaScriptIfRelevant);
                              },
                              "success": function(writeCompiledJavaScriptIfRelevant) {
                                // Write compiled stylesheet (if relevant)
                                require('../index').writeCompiledStylesheetIfRelevant({
                                  "outputDir": tmpOutputDirectoryPath,
                                  "lessSrcDir": sourceDirectoryPath + "/styles"
                                }).exec({
                                  "error": function(writeCompiledStylesheetIfRelevant) {
                                    exits.error7(writeCompiledStylesheetIfRelevant);
                                  },
                                  "success": function(writeCompiledStylesheetIfRelevant) {
                                    // Publish package
                                    require('@treelinehq/treelinehq/machinepack-npm_5.1.0').publish({
                                      "dir": tmpOutputDirectoryPath
                                    }).exec({
                                      "error": function(publishPackage) {
                                        exits.error9(publishPackage);
                                      },
                                      "alreadyExists": function(publishPackage) {
                                        exits.alreadyExists(publishPackage);
                                      },
                                      "noSuchDir": function(publishPackage) {
                                        exits.noSuchDir(publishPackage);
                                      },
                                      "notADir": function(publishPackage) {
                                        exits.notADir(publishPackage);
                                      },
                                      "invalidPackage": function(publishPackage) {
                                        exits.invalidPackage(publishPackage);
                                      },
                                      "success": function(publishPackage) {
                                        exits.success(publishPackage);
                                      }
                                    });

                                  }
                                });

                              }
                            });

                          }
                        });

                      }
                    });

                  }
                });

              }
            });

          }
        });

      }
    });

  }
});