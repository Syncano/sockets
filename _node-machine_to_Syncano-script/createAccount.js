const Syncano = require('syncano');
const { host } = require('./helpers');
const fs = require('fs');
let connection = Syncano({baseUrl: host});
const generateCiCredentials = require('./generateCiCredentials');

var Account = connection.Account;
var credentials = generateCiCredentials();

function account() {
  return Account
  .register(credentials)
  .then((account) => {
    connection = Syncano({accountKey: account.account_key, baseUrl: host});
    var Instance = connection.Instance;
    var instance = {
      "name": Math.random().toString(36).substring(7)
    };

    return Instance
      .please()
      .create(instance)
      .then((newInstance) => {
        const accountInfo = {
          apiKey: account.account_key,
          instanceName: newInstance.name,
          accountEmail: account.email,
          password: credentials.password
        };
        fs.writeFileSync('./newAccountInfo.json', JSON.stringify(accountInfo, null, 2), function (err) { });
      })
  });
};

account();
