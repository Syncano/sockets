var UglifyJS = require('uglify-js');
return exits.success(UglifyJS.minify(inputs.javascript, {fromString: true}).code);