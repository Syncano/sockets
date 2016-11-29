var fs = require('fs');
var dedent = require('dedent');
var mkdirp = require('mkdirp');
var yaml = require('write-yaml');

const machines = require('./data.json');
const BLACK_LIST = [
  'machinepack-elasticsearch',
  'machinepack-assets',
  'machinepack-weather',
  'machinepack-azure',
  'machinepack-mongodb',
  'machinepack-thumb',
];

function renderEndpoints(endpoints) {
  return (endpoints.map(function(item) {
    return ({
      [`${item.identity}`]: {
        GET: {
          script: item.identity
        }
      }
    })
  }))
}

function renderDependencies(dependencies) {
  return dependencies.map(function(item) {
    return ({
      [`${item.identity}`]: {
        runtime_name: 'nodejs_library_v1.0',
        file: `scripts/${item.identity}.js`,
        description: item.description
      }
    })
  })
}

function createDirs(rootDir) {
  mkdirp.sync(`${rootDir}/scripts`);
  fs.writeFileSync(`${rootDir}/socket.yaml`, '');
}

function createYamlInput(content, rootDir) {
  yaml.sync(`${rootDir}/socket.yaml`, content);
}

function createScript(script, rootDir) {
  fs.writeFileSync(`${rootDir}/scripts/${script.identity}.js`, dedent(script.fn));
}

function whiteListMachine(machine, blackList) {
  if (blackList.indexOf(machine.identity) > -1) {
    return false;
  }

  return true;
}

machines
  .filter((machine) => whiteListMachine(machine, BLACK_LIST))
  .forEach((machine) => {
    const { machines, variableName, version } = machine;
    const rootDir = `sockets/${variableName}/${version}`;

    const content = {
      name: variableName,
      description: machine.description,
      author: {
        name: 'Syncano',
        email: 'hello@syncano.io'
      },
      endpoints: renderEndpoints(machines),
      dependencies: renderDependencies(machines)
    }

    // const meta = dedent`  
    //   name: ${variableName}
    //   description: ${machine.description}

    //   author:
    //     name: Syncano
    //     email: hello@syncano.io
    // `;

    // const endpoints = dedent`
    //   endpoints:${renderEndpoints(machines)}
    // `;

    // const dependencies = dedent
    // `
    //   dependencies:
    //       scripts:
    //           ${renderDependencies(machines)}
    // `;

    // const content = [meta, endpoints, dependencies].join('\n\n');

    createDirs(rootDir);
    createYamlInput(content, rootDir);

    machines.forEach((script) => {
      createScript(script, rootDir);
    });
  }
);

console.log('DONE')
