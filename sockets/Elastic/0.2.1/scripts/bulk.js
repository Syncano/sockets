var util = require('util');
var _ = require('lodash');
var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  host: util.format('%s:%d', inputs.hostname, inputs.port||9200),
  log: require('../helpers/noop-logger')
});

client.bulk({
  index: inputs.index || "default_bulk_index",
  type: inputs.type || "default_bulk_type",
  body: inputs.actions
}, function (err, body) {
  if (err) {
    client.close();
    if (typeof err !== 'object' || typeof err.message !== 'string') {
      return exits.error(err);
    }
    if (err.constructor && err.constructor.name === 'NoConnections' || err.message.match(/No Living connections/)) {
      return exits.couldNotConnect();
    }
    return exits.error(err);
  }
  client.close();
  return exits.success();
});