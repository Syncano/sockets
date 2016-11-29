if ( typeof cache !== 'undefined' && cache) {
      var value = cache.get(inputs.key);
      if (value || value === ''){
        return exits.success(value);
      }
} else {
    var SimpleCache = require("simple-lru-cache");
    cache = new SimpleCache({"maxSize":100000});
}

return exits.notFound();