const axios = require('axios');
const fs = require('fs');

const listSockets = function() {
  return axios
    .get(
      'https://api.syncano.io/v2/instances/INSTANCE_NAME/sockets/',
      {
        headers: { 'X-API-KEY': 'API_KEY' }
      }
    )
    .then(function(response) {
      const path = './valid_sockets.json';
      try {
        fs.accessSync(path);
        fs.unlinkSync(path);
      } catch (e) {
      }
      response.data.objects.forEach(function(item) {
        const status = item.status.toUpperCase();
          fs.appendFileSync(path, `${item.name}: ${status}\n`, function (err) { });
          console.log(`${item.name}: ${status}`); 
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  };

listSockets();


