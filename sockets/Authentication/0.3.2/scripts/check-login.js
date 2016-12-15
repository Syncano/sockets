var Session = require('machinepack-session');

Session.load({
  key: 'me'
}).setEnvironment({
  req: env.req
}).exec({
  error: exits.error,
  notFound: function (){
    return exits.otherwise();
  },
  success: function (id){
    return exits.success(id);
  }
});