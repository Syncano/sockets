const axios = require('axios');
const newAccountInfo = require('./newAccountInfo');
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
const rawAddress = 'https://raw.githubusercontent.com/Syncano/sockets/master'
const request = axios.create({
  baseURL: `${host}/v2/instances/${instanceName}/sockets`,
  headers: {'X-API-KEY': apiKey}
});

module.exports = {
  request,
  host,
  BLACK_LIST,
  rawAddress
};
