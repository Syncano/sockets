var SegmentIO = require('analytics-node');
var api = new SegmentIO(inputs.writeKey);

api.group({
  userId: inputs.userId,
  groupId: inputs.groupId,
  traits: inputs.traits||{},
  integrations: inputs.integrations||{
    All: true,
    Mixpanel: false,
    Salesforce: false
  }
}, function(err, batch) {
  if (err) return exits.error(err);
  return exits.success();
});