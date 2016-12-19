var util = require('util');
var _ = require('lodash');
var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: util.format('%s:%d', inputs.hostname, inputs.port||9200),
  log: require('../helpers/noop-logger')
});

client.search({
  q: inputs.query,
  _source : false,
  index: inputs.index
}, function (err, body) {
  if (err) {
    client.close();
    if (typeof err !== 'object' || typeof err.message !== 'string'){
      return exits.error(err);
    }
    if (err.constructor && err.constructor.name === 'NoConnections' || err.message.match(/No Living connections/)){
      return exits.couldNotConnect();
    }
    if (err.message.match(/IndexMissingException/)){
      return exits.noSuchIndex();
    }
    return exits.error(err);
  }

  // console.log(util.inspect(body, false, null));
  var hits = [];

  try {
    hits = body.hits.hits;
    hits = _.pluck(hits, '_id');
  }
  catch (e) {
    client.close();
    return exits.error(e);
  }

  client.close();
  return exits.success(hits);
});