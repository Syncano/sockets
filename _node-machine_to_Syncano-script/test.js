const axios = require('axios');
const bluebird = require('bluebird');
const machines = require('./data.json');
const functionsArray = [];
const BLACK_LIST = [
  'machinepack-elasticsearch',
  'machinepack-assets',
  'machinepack-weather',
  'machinepack-azure',
  'machinepack-mongodb',
  'machinepack-thumb',
];

const setCallsArray = () => {
  const installSocket = (name, install_url) => {
    return axios
      .post(
        'https://api.syncano.io/v2/instances/INSTANCE_NAME/sockets/install/',
        {
          name,
          install_url,
          payload: {}
        },
        {
          headers: { 'X-API-KEY': 'API_KEY' }
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function whiteListMachine(machine, blackList) {
    if (blackList.indexOf(machine.identity) > -1) {
      return false;
    }

    return true;
  }

  machines
    .filter((machine) => whiteListMachine(machine, BLACK_LIST))
    .forEach((machine) => {
      const { variableName, version } = machine;
      const install_url = `https://raw.githubusercontent.com/Syncano/sockets/master/${variableName}/${version}/socket.yaml`;

        functionsArray.push(installSocket(variableName, install_url));
    });
};

setCallsArray();
