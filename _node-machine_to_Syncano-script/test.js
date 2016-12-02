const { request, install_url, BLACK_LIST } = require('./helpers');
const machines = require('./data.json');

function installSocket(name, install_url) {
  return request
    .post('/install/',
      {
        name,
        install_url
      }
    )
    .then(console.log)
    .catch((err) => {
      console.log('Error: ', err);
    })
};

function whiteListMachine(machine, blackList) {
  return blackList.indexOf(machine.identity) === -1;
}

machines
  .filter((machine) => whiteListMachine(machine, BLACK_LIST))
  .forEach((machine) => {
    const { variableName, version } = machine;
    const rawAddress = 'https://raw.githubusercontent.com/Syncano/sockets/master'
    const install_url = `${rawAddress}/${variableName}/${version}/socket.yaml`;

    installSocket(variableName, install_url);
  });

