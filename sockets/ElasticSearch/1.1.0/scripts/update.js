var util = require('util');
var _ = require('lodash');
var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: util.format('%s:%d', inputs.hostname, inputs.port||9200),
  log: require('../helpers/noop-logger')
});

client.index({
  index: inputs.index,
  type: inputs.type||'default',
  id: inputs.id,
  body: {
    doc: inputs.document
  },
}, function (err, body) {
  if (err) {
    client.close();
    if (typeof err !== 'object' || typeof err.message !== 'string'){
      return exits.error(err);
    }
    if (err.constructor && err.constructor.name === 'NoConnections' || err.message.match(/No Living connections/)){
      return exits.couldNotConnect();
    }
    if (err.message.match(/Not Found/)) {
      return exits.documentNotFound();
    }
    if (err.message.match(/IndexMissingException/)){
      return exits.noSuchIndex();
    }
    return exits.error(err);
  }

  try {
    if (body.created) {
      // Expected response from ElasticSearch to specify `created:false`
      // since it didn't, we inadvertently created the document.
      client.close();
      return exits.created(inputs.id);
    }
  }
  catch (e) {
    client.close();
    return exits.error(e);
  }

  client.close();
  return exits.success();
});