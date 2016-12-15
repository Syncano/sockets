const { request, BLACK_LIST } = require('./helpers');
const fs = require('fs');
const mypath = require('path');
const newAccountInfo = require('./test/newAccountInfo');
const FormData = require('form-data');
const machines = require('./machines.json');
const archiver = require('archiver');
const rimraf = require('rimraf');

const { apiKey, instanceName } = newAccountInfo;

function getSocket(name) {
  if (typeof(name) !== 'string') {
    return false
  }

  return request.get(`/${name}/`);
}

function deleteSocket(name) {
  if (typeof(name) !== 'string') {
    return false
  }

  return request
    .delete(`/${name}/`)
    .then((res) => res.url)
    .catch(console.log);
}

function whiteListMachine(machine, blackList) {
  if (typeof(blackList) !== 'array' && typeof(machine) !== 'object') {
    if (blackList.indexOf(machine.identity) > -1) {
      return false;
    } 
  }

  return true;
}

function deleteFolder(folderName) {
  if (typeof(name) !== 'string') {
    return false;
  }

  return rimraf.sync(mypath.resolve(`../${folderName}`));
}


function checkIfInstalled(name) {
  if (typeof(name) !== 'string') {
    return false;
  }

  return getSocket(name).then((response) => {
    console.log(`${name} installation status: ${response.data.status}`);

    return new Promise((resolve, reject) => {
      if (response.data.status === 'ok') {
        resolve(name);
      }

      setTimeout(() => {
        reject(response.data.status);
      }, 3000);
    }).catch(() => {
      if (response.data.status === 'error') {
        return deleteFolder(name);
      }
      return checkIfInstalled(name);
    });
  });
}

function createZip(name, version) {
  if (typeof(name) !== 'string' && typeof(version) !== 'string') {
    return false;
  }

  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(`./test/${name}-${version}.zip`, { mode: 0o700 });
    const archive = archiver('zip', {
      store: true
    });

    archive.pipe(output);
    archive.on('error', () => {
      console.log('Error during creation of a zip file');
      reject();
    });

    archive.directory(`../sockets/${name}/${version}`, '/');
    archive.finalize();

    output.on('close', () => {
      console.log(`${name} zip file created`);
      resolve();
    });
  });
}

function deleteZip(name) {
  if (typeof(name) !== 'string') {
    return false;
  }

  fs.unlinkSync(name);
  console.log('Zip file deleted \n');
}

function installSocket(socketName, path) {
  if (typeof(socketName) !== 'string' && typeof(path) !== 'string') {
    return false;
  }
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
      resolve(res);
    });
  });
}

const promises = machines
  .filter((machine) => whiteListMachine(machine, BLACK_LIST))
  .map((machine, index) => {
    const { variableName, version } = machine;
    const path = `./test/${variableName}-${version}.zip`;

    return () => createZip(variableName, version)
      .then(() => installSocket(variableName, path))
      .then(() => checkIfInstalled(variableName))
      .then(() => deleteSocket(variableName))
      .then(() => deleteZip(path))
      .catch((err) => console.log(index, err));
  });

const runPromisesInSequence = (p, fn) => p.then(fn);

// promises.reduce(runPromisesInSequence, Promise.resolve());

export default {
  checkIfInstalled,
  createZip,
  deleteFolder,
  deleteSocket,
  deleteZip,
  getSocket,
  installSocket,
  runPromisesInSequence,
  whiteListMachine
};
