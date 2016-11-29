var Machine = require('machine');
var queryAll = Machine.build(require('./query-all'));
queryAll({
  query: inputs.query,
  category: 'tv'
}).exec({
  error: function(error) {
    return exits.error(error);
  },
  success: function(torrents) {
    return exits.success(torrents);
  }
})