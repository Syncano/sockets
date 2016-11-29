var SimpleCache = require("simple-lru-cache");
cache = new SimpleCache({"maxSize":100000});

cache.set(inputs.key, inputs.value);
return exits.success();