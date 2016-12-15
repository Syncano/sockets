import { BLACK_LIST } from './helpers';
import fs from 'fs';
import dedent from 'dedent';
import mkdirp from 'mkdirp';
import yaml from 'write-yaml';
import _ from'lodash';
import machines from './machines.json';

const renderEndpoints = (endpoints) => {
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

const createDirs = (rootDir) => {
  if (typeof(rootDir) !== 'string') {
    return false;
  }

  mkdirp.sync(`${rootDir}/scripts`);
  fs.writeFileSync(`${rootDir}/socket.yml`, '');
}

const createYamlInput = (content, rootDir) => {
  if (typeof(rootDir) !== 'string' || typeof(content) !== 'object') {
    return false;
  }

  return yaml.sync(`${rootDir}/socket.yml`, content);
}

const createScript = (script, rootDir) => {
  if (typeof(rootDir) !== 'string' || typeof(script) !== 'object') {
    return false;
  }

  return fs.writeFileSync(`${rootDir}/scripts/${script.identity}.js`, dedent(script.fn));
}

const whiteListMachine = (machine, blackList) => {
  if (typeof(blackList) !== 'array' && typeof(machine) !== 'object') {
    if (blackList.indexOf(machine.identity) > -1) {
      return false;
    } 
  }

  return true;
}

const createSockets = () => {
  machines
    .filter((machine) => whiteListMachine(machine, BLACK_LIST))
    .forEach((machine) => {
      const { machines, variableName, version } = machine;
      const rootDir = `../sockets/${variableName}/${version}`;

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
    console.log('Folders created');
};

if (process.argv[2] !== 'test/main_test.js') {
  createSockets();
}

export default {
  renderEndpoints,
  createDirs,
  createSockets,
  createScript,
  createYamlInput,
  whiteListMachine
};
