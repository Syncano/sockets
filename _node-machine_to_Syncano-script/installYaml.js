const { request, BLACK_LIST, rawAddress } = require('./helpers');
const fs = require('fs');
const newAccountInfo = require('./newAccountInfo');
const { apiKey, instanceName } = newAccountInfo;
const FormData = require('form-data');
const validSocketsFile = './valid_sockets.json';
const machines = require('./machines.json');
const zipFolder = require('zip-folder');
const json = {};
const archiver = require('archiver');


function getSocket(name) {
  return request
    .get(`/${name}/`)
    // .then(() => console.log('getSocketRequest'))
    .then((response) => {
      const status = response.data.status;
      json[name] = status;
      fs.writeFileSync(validSocketsFile, JSON.stringify(json, null, 2));
      return name;
    })
    .then(() => name)

    // .catch(console.log);
};

function deleteSocket(name) {
  return request
    .delete(`/${name}/`)
    .then((res) => {
      return res.url;
    })
    .catch(console.log);
};

function whiteListMachine(machine, blackList) {
  return blackList.indexOf(machine.identity) === -1;
}

function checkIfInstalled(name) {
  getSocket(name).then((response) => {
    // console.log(name,`:`, response.data.status);

    return new Promise((resolve, reject) => {
      if (response.data.status === 'ok') {
        resolve(name);
      }

      setTimeout(() => {
        reject(name);
      }, 3000);
    });
  })
  .then(() => deleteZip(path))
  .catch(checkIfInstalled);
}

function createZip(name, version) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(`../${name}-${version}.zip`, { mode: 0o700 });
    const archive = archiver('zip', {
      store: true
    });
    archive.pipe(output);
    archive.on('error', reject);

    archive.file(`./socket.yml`);
    archive.directory(`../${name}/${version}/scripts`, 'scripts');
    archive.finalize();

    output.on('close', resolve);
  });
}

// function createZip(name, version) {
//   zipFolder(`../${name}/${version}`,`../${name}-${version}.zip`, function(err) {
//     if(err) {
//       console.log('oh no!', err);
//     } else {
//       console.log(name, 'created');
//     }
//   });
// }

function deleteZip(name) {
  fs.unlinkSync(name);
  console.log('deleted', name)
}

function installSocket(socketName, path) {
  const endpointPath = `/v2/instances/${instanceName}/sockets/`;
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append('name', socketName);
    form.append('zip_file', fs.createReadStream(path));

    form.submit({
      method: 'POST',
      protocol: 'https:',
      host: 'api.syncano.rocks',
      headers: {
        'X-Api-Key': apiKey
      },
      path: endpointPath

    }, (err, res) => {
      if (err || res.statusCode === 404) {
        reject(err || res);
      }
        // fs.unlink(`${this.projectPath}/socket.zip`);
        resolve(res);
      });
  });
}

const promises = machines
  .filter((machine) => whiteListMachine(machine, BLACK_LIST))
  .map((machine, index) => {
    const { variableName, version } = machine;
    const path = `../${variableName}-${version}.zip`;
    createZip(variableName, version);

    return () => installSocket(variableName, path)
      .then(() => checkIfInstalled(variableName))
      .then(() => deleteSocket(variableName))
      .then(() => console.log('Done'))
      // .then(() => deleteZip(path))
            // .catch((err) => console.log(index, err))
});

const runPromisesInSequence = (p, fn) => p.then(fn);
promises.reduce(runPromisesInSequence, Promise.resolve());
