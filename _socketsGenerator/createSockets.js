const { BLACK_LIST } = require('./helpers');
const fs = require('fs');
const dedent = require('dedent');
const mkdirp = require('mkdirp');
const yaml = require('write-yaml');
const _ = require('lodash');
const machines = require('./machines.json');

function renderEndpoints(endpoints) {
  return (endpoints.map(function(item) {
    if (!item.identity && !item.description) {
      return false
    }
    return ({
      [`${item.identity}`]: {
        POST: {
          file: `scripts/${item.identity}.js`,
          description: item.description
        }
      }
    });
  }));
}

function createDirs(rootDir) {
  if (typeof(rootDir) !== 'string') {
    return false;
  }
  mkdirp.sync(`${rootDir}/scripts`);
  fs.writeFileSync(`${rootDir}/socket.yml`, '');
}

function createYamlInput(content, rootDir) {
  if (typeof(rootDir) !== 'string' || typeof(content) !== 'object') {
    return false;
  }
  yaml.sync(`${rootDir}/socket.yml`, content);
}

function createScript(script, rootDir) {
  if (typeof(rootDir) !== 'string' || typeof(script) !== 'object') {
    return false;
  }
  fs.writeFileSync(`${rootDir}/scripts/${script.identity}.js`, dedent(script.fn));
}

function whiteListMachine(machine, blackList) {
  if (typeof(blackList) !== 'array' && typeof(machine) !== 'object') {
    if (blackList.indexOf(machine.identity) > -1) {
      return false;
    } 
  }

  return true;
}

function createSockets() {
  machines
    .filter((machine) => whiteListMachine(machine, BLACK_LIST))
    .forEach((machine) => {
      const { machines, variableName, version } = machine;
      const rootDir = `../${variableName}/${version}`;

      const content = {
        name: variableName,
        description: machine.description,
        author: {
          name: 'Syncano',
          email: 'hello@syncano.io'
        },
        endpoints: _.assign.apply(_, renderEndpoints(machines))
      };

      createDirs(rootDir);
      createYamlInput(content, rootDir);

      machines.forEach((script) => {
        createScript(script, rootDir);
      });
    }
  )
};

// createSockets();

export default {
  renderEndpoints,
  createDirs,
  createYamlInput,
  createScript,
  whiteListMachine,
  createSockets 
};
