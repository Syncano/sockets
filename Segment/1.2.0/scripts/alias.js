var SegmentIO = require('analytics-node');
var api = new SegmentIO(inputs.writeKey);

api.alias({
  userId: inputs.destinationUserId,
  previousId: inputs.sourceUserId,
  integrations: inputs.integrations||{
    All: true,
    Mixpanel: false,
    Salesforce: false
  }
}, function(err, batch){
  if (err) return exits.error(err);
  return exits.success();
});