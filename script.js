var fs = require('fs');
var dedent = require('dedent');
var axios = require('axios');
var exec = require('exec');
var shell = require('shelljs');
const data = require('./data.json');


let content = '';
shell.exec('mkdir sockets');

const renderEndpoints = (endpoints) => {
  return (dedent`
    endpoints:
      ${(endpoints.map((item) => {
          return (`
            GET:
              script: ${item.identity}
          `);
      })).join(' ')}
  `);
};

var renderDependencies = (endpoints) => {
  return (dedent`
    dependencies:
              scripts:
        ${(endpoints.map((item) => {
            return (`
              ${item.identity}:
                runtime_name: nodejs_library_v1.0
                file: scripts/${item.identity}.js
                description: ${item.description}
            `);
        })).join(' ')}
  `);
};

const createDirs = (machineName) => {
  const rootDir = `sockets/${machineName}`;

  shell.exec(`mkdir ${rootDir} && mkdir ${rootDir}/scripts && touch ${rootDir}/socket.yaml`);
  console.log(`Directory ${machineName} created.`)
}

const createYamlFile = (content, machineName) => {
  fs.writeFile(`sockets/${machineName}/socket.yaml`, content, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The YAML file was saved!");
  });
}

const createScript = (script, machineName) => {
  fs.writeFile(`sockets/${machineName}/scripts/${script.identity}.js`, dedent(script.fn), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The SCRIPT file was saved!");
  });
}

data.map(machine => {
  const { machines, identity } = machine;

  content = dedent`
    name: ${machine.friendlyName}
    description: ${machine.description}

    author:
      name: Syncano
      email: hello@syncano.io
    
    ${renderEndpoints(machines)}

    ${renderDependencies(machines)}
  `;
  createDirs(identity);
  createYamlFile(content, identity);
  machine.machines.map((script) => {
    createScript(script, identity)
  });

  });
