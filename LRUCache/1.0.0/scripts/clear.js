if ( typeof cache !== 'undefined' && cache) {
     cache.reset();
} else {
    var SimpleCache = require("simple-lru-cache");
    cache = new SimpleCache({"maxSize":100000});
}
return exits.success();