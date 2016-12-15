var SegmentIO = require('analytics-node');
var api = new SegmentIO(inputs.writeKey);

api.track({
  userId: inputs.userId,
  event: inputs.event,
  properties: inputs.properties||{},
  integrations: inputs.integrations||{
    All: true,
    Mixpanel: false,
    Salesforce: false
  }
}, function(err, batch){
  if (err) return exits.error(err);
  return exits.success();
});