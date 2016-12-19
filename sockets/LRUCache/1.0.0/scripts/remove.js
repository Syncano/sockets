if ( typeof cache !== 'undefined' && cache) {
     cache.del(inputs.key);
} else {
    var SimpleCache = require("simple-lru-cache");
    cache = new SimpleCache({"maxSize":100000});
}
return exits.success();