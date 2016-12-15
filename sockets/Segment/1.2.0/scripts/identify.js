var SegmentIO = require('analytics-node');
var api = new SegmentIO(inputs.writeKey);

api.identify({
  userId: inputs.userId,
  traits: inputs.traits||{},
  // context: inputs.context||{},
  integrations: inputs.integrations||{
    All: true,
    Mixpanel: false,
    Salesforce: false
  }
}, function(err, batch){
  if (err) return exits.error(err);
  return exits.success();
});