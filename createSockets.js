const { BLACK_LIST } = require('./helpers');
const fs = require('fs');
const dedent = require('dedent');
const mkdirp = require('mkdirp');
const yaml = require('write-yaml');
const _ = require('lodash');
const machines = require('./machines.json');

function renderEndpoints(endpoints) {
  return (endpoints.map(function(endpoint) {
    if (!endpoint.identity && !endpoint.description) {
      return false
    }

    return ({
      [`${endpoint.identity}`]: {
        file: `scripts/${endpoint.identity}.js`,
        description: endpoint.description,
        parameters: endpoint.inputs
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
  fs.writeFileSync(`${rootDir}/.gitignore`, 'node_modules\n**/.bundles\n**/.dist');
}

function createYamlInput(content, rootDir) {
  if (typeof(rootDir) !== 'string' || typeof(content) !== 'object') {
    return false;
  }

  return yaml.sync(`${rootDir}/socket.yml`, content);
}

function createPackageJsonInput(rootDir, machine) {
  const content = {
    "name": `syncano-socket-${machine.variableName.toLowerCase()}`,
    "description": machine.description,
    "version": machine.version,
    "author": "Syncano",
    "bugs": {
      "url": "https://github.com/Syncano/sockets/issues"
    },
    "scripts": {
      "start": ""
    },
    "dependencies": {
      [machine.identity]: machine.version
    },
    "devDependencies": {},
    "keywords": [
      "syncano",
      "syncano-socket",
      `syncano-socket-${machine.variableName}`,
      `${machine.variableName}-socket`,
    ],
    "repository": "",
    "licenses": ""
  }

  fs.writeFileSync(`${rootDir}/package.json`, `${JSON.stringify(content, null, 4)}\n`);

}

function createReadmeInput(rootDir, machine) {
  if (typeof(machine) !== 'object') {
    return false;
  }

  const parameters = (parameters) => _.map(parameters, (parameter, key) => `
  ${key}: ${parameter.type === 'string' ? `'${parameter.example || `<${parameter.type}>`}'` : parameter.example || `<${parameter.type}>`}`);

  const endpoints = machine.machines.map((endpoint) => `
### ${endpoint.identity}

#### Parameters:
\`\`\`
${Object.keys(endpoint.inputs).length ? parameters(endpoint.inputs) : 'No parameters'}
\`\`\`

`);

  const content = `# ${machine.variableName} Syncano Socket

It is ${machine.variableName} integration with Syncano. It allows you to ${machine.description.toLowerCase()}

## Endpoints
${endpoints.join('')}`;

  fs.writeFileSync(`${rootDir}/README.md`, content);
}

function createScript(script, rootMachine, rootDir) {
  if (typeof(rootDir) !== 'string' || typeof(script) !== 'object') {
    return false;
  }

  script.fn = createFunction({ rootMachine, script });

  return fs.writeFileSync(`${rootDir}/scripts/${script.identity}.js`, script.fn);
}

function createFunction({ rootMachine, script }) {
  const scriptName = rootMachine.identity.replace('machinepack-', '');
  const responses = Object.keys(script.exits).map((exit) => `
    ${script.exits[exit].outputDescription ? `// ${script.exits[exit].outputDescription}` : ''}
    ${exit}: function (response) {
      setResponse(new HttpResponse(${exit === 'success' ? '200' : '500'}, JSON.stringify(response)));
    }`);

  return `var ${scriptName} = require('${rootMachine.identity}');

// ${script.description}
${scriptName}.${script.variableName}(ARGS).exec({
${responses}

});
`
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
      const { identity, machines, variableName, version } = machine;
      const rootDir = `./sockets/${variableName}/${version}`;

      if (machines.length === 0) return false;

      const content = {
        name: variableName,
        description: machine.description,
        version: machine.version,
        author: {
          name: 'Syncano',
          email: 'support@syncano.io'
        },
        endpoints: _.assign.apply(_, renderEndpoints(machines))
      };

      createDirs(rootDir);
      createYamlInput(content, rootDir);
      createReadmeInput(rootDir, machine);
      createPackageJsonInput(rootDir, machine);


      machines.forEach((script) => {
        createScript(script, { identity, variableName } , rootDir);
      });
    }
  )
    console.log('Folders created');
};

if (!process.argv.includes('test/main_test.js')) {
  createSockets();
}

module.exports = {
  renderEndpoints,
  createDirs,
  createSockets,
  createScript,
  createYamlInput,
  createReadmeInput,
  createPackageJsonInput,
  whiteListMachine
};
