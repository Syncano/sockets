const { request } = require('./helpers');
const fs = require('fs');
const validSockets = './valid_sockets.json';

function removeValidSocketsFile() {
  try {
    fs.accessSync(validSockets);
    fs.unlinkSync(validSockets);
  } catch (e) {}
}

function listSockets() {
  return request
    .get('/')
    .then(function(response) {
      const json = {};

      removeValidSocketsFile();
      response.data.objects.forEach(function(item) {
        const status = item.status.toUpperCase();
        console.log(`${item.name}: ${status}`); 
        json[item.name] = status;
      })
      fs.appendFileSync(validSockets, JSON.stringify(json, null, 2), function (err) { });
    })
    .catch(console.log);
  };

listSockets();
