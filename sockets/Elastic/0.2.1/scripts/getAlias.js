var util = require('util');
var _ = require('lodash');
var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  host: util.format('%s:%d', inputs.hostname, inputs.port||9200),
  log: require('../helpers/noop-logger')
});

client.indices.getAlias({
  name: inputs.name
}, function (err, body) {
  if (err) {
    client.close();
    if (typeof err !== 'object' || typeof err.message !== 'string') {
      return exits.error(err);
    }
    if (err.constructor && err.constructor.name === 'NoConnections' || err.message.match(/No Living connections/)) {
      return exits.couldNotConnect();
    }
    if (err.message.match(/missing/)) {
      return exits.aliasNotExists();
    }
    return exits.error(err);
  }

  var alias = "";
  try {
    alias = Object.keys(body)[0];
  } catch (e) {
    client.close();
    return exits.error(e);
  }

  client.close();
  return exits.success(alias);
});