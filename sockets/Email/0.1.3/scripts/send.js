var h = require('../lib/helper');
if (inputs.mail.templatesDir) {
  h.sendWithTpl(inputs, exits);
} else {
  //console.log("simple mail");
  h.sendMail(inputs, exits);
}