require('../lib/helper.js')
.getFiles(
  inputs.path,
  inputs.merge||false,
  inputs.nomethod||false,
  inputs.freeze||false,
  exits.success);