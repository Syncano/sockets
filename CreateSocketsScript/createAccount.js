const Syncano = require('syncano');
const fs = require('fs');
const generateCiCredentials = require('./generateCiCredentials');
const host = process.env.SYNCANO_BASE_URL;

let connection = Syncano({ baseUrl: host });
const Account = connection.Account;
const credentials = generateCiCredentials();
const dir = './test';

function createAccount() {
  return Account
  .register(credentials)
  .then((account) => {
    connection = Syncano({ accountKey: account.account_key, baseUrl: host });
    const Instance = connection.Instance;
    const instance = {
      'name': Math.random().toString(36).substring(7)
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
        fs.writeFileSync('./test/newAccountInfo.json', JSON.stringify(accountInfo, null, 2), function (err) { });
      });
  });
}
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}
createAccount();
