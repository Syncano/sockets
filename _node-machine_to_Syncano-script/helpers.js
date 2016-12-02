const axios = require('axios');
let newAccountInfo = require('./newAccountInfo');
const { apiKey, instanceName } = newAccountInfo;
const host = 'api.syncano.rocks';
const BLACK_LIST = [
  'machinepack-elasticsearch',
  'machinepack-assets',
  'machinepack-weather',
  'machinepack-azure',
  'machinepack-mongodb',
  'machinepack-thumb',
];

const request = axios.create({
  baseURL: `https://${host}/v2/instances/${instanceName}/sockets`,
  headers: {'X-API-KEY': apiKey}
});

module.exports = {
  request,
  BLACK_LIST
};
