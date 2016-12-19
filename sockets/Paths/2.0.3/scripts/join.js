var Path = require('path');
var resultPath = Path.join.apply(Path, inputs.paths);
return exits.success(resultPath);