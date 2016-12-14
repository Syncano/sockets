const axios = require('axios');
const newAccountInfo = require('./test/newAccountInfo');
const { apiKey, instanceName } = newAccountInfo;
const host = process.env.SYNCANO_BASE_URL;
const BLACK_LIST = [
  'machinepack-elasticsearch',
  'machinepack-assets',
  'machinepack-weather',
  'machinepack-azure',
  'machinepack-mongodb',
  'machinepack-thumb',
];
const request = axios.create({
  baseURL: `${host}/v2/instances/${instanceName}/sockets/`,
  headers: {'X-API-KEY': apiKey}
});

module.exports = {
  request,
  host,
  BLACK_LIST
};
