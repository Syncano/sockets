var Http = require('machinepack-http');
Http.sendHttpRequest({
  url: inputs.webhookUrl,
  method: 'post',
  params: {
    channel: inputs.channel,
    text: inputs.message,
    link_names: inputs.linkNames ? 1 : 0,
    icon_emoji: inputs.iconEmoji,
    username: inputs.username
  }
}).exec({
  success: exits.success,
  notFound: exits.notFound,
  error: exits.error
});