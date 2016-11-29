function (inputs, exits
  /**/
) {

    var server = require('jxm');
    var _ = require('lodash');
    var baseUrlPath = null;

    if (_.isUndefined(inputs.baseUrlPath)){
        baseUrlPath = '/'.concat(inputs.serviceName);
    } else {
        baseUrlPath = inputs.baseUrlPath;
    }


    server.setApplication(inputs.serviceName, baseUrlPath, "NUBISA-STANDARD-KEY-CHANGE-THIS");

    server.addJSMethod("serverMethod", function (env, params) {
        console.log('received :'.concat(params));
       server.sendCallBack(env, 'Simon Says : '.concat(params));
    });
    server.start();

  return exits.success('server started!');
}