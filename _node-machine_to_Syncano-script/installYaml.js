const { request, BLACK_LIST, rawAddress } = require('./helpers');
const fs = require('fs');
const validSocketsFile = './valid_sockets.json';
const machines = require('./machines.json');
const bluebird = require('bluebird');
const zipFolder = require('zip-folder');


function removeValidSocketsFile() {
  try {
    fs.accessSync(validSocketsFile);
    fs.unlinkSync(validSocketsFile);
  } catch (e) {}
}

function getSocket(name) {
  return request
    .get(`/${name}/`)
    .then((response) => {
      const json = {};
      const status = response.data.status;
      json[name] = status;
      fs.appendFileSync(validSocketsFile, JSON.stringify(json, null, 2));
      return response;
    })
    .catch(console.log);  
};

function deleteSocket(name) {
  return request
    .delete(`/${name}/`)
    .then((res) => {
      const json = {};
      json[name] = 'Deleted';
      fs.appendFileSync(validSocketsFile, JSON.stringify(json, null, 2));
      return res.url;
    })
    .catch(console.log);
};

function whiteListMachine(machine, blackList) {
  return blackList.indexOf(machine.identity) === -1;
}

function installSocket(name, install_url) {
  return request
    .post('/install/',
      {
        name,
        install_url
      }
    )
    .then(() => name);
};

function checkIfInstalled(name) {
  return getSocket(name).then((response) => {
    console.log('res', response.data.status);

    return new Promise((resolve, reject) => {
      if (response.data.status === 'ok') {
        resolve(name);
      }

      setTimeout(() => {
        reject(name);
      }, 3000);
    });
  })
  .catch(checkIfInstalled);
}

const promises = machines
  .filter((machine) => whiteListMachine(machine, BLACK_LIST))
  .map((machine, index) => {
    const { variableName, version } = machine;

    zipFolder(`../${variableName}/${version}/`, `../${variableName}-${version}.zip`, function(err) {
      if(err) {
          console.log('oh no!', err);
      } else {
         console.log('EXCELLENT');
      }
    });
    const install_url = `${rawAddress}/${variableName}/${version}/socket.yaml`;

    const zip_file = require(`../${variableName}-${version}.zip`);
    // console.log('zipFile', zip_file);
    return () => installSocket(variableName, install_url)
      .then(checkIfInstalled)
      .then(deleteSocket)
      .then(() => console.log('done'))
      .catch((err) => console.log(index, err.response.status))
});

const runPromisesInSequence = (p, fn) => p.then(fn);
promises.reduce(runPromisesInSequence, Promise.resolve());
