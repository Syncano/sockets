var helper = require("../lib/helper.js");
if (helper.fileExist(inputs.source)) {
  return exits.success( helper.read(inputs.source));

} else {
  return exits.errorFileNotFind();

}