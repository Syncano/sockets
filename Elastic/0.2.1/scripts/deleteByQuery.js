var util = require('util');
var _ = require('lodash');
var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  host: util.format('%s:%d', inputs.hostname, inputs.port||9200),
  log: require('../helpers/noop-logger')
});

client.deleteByQuery({
  index: inputs.index,
  type: inputs.type||'default',
  body: inputs.query
}, function (err, body) {
  if (err) {
    client.close();
    if (typeof err !== 'object' || typeof err.message !== 'string') {
      return exits.error(err);
    }
    if (err.constructor && err.constructor.name === 'NoConnections' || err.message.match(/No Living connections/)) {
      return exits.couldNotConnect();
    }
    if (err.message.match(/IndexMissingException/)) {
      return exits.noSuchIndex();
    }
    return exits.error(err);
  }

  client.close();
  return exits.success();
});