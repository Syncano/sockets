import Syncano from 'syncano';
import fs from 'fs';
import generateCiCredentials from './generateCiCredentials';

const host = process.env.SYNCANO_BASE_URL;
let connection = Syncano({ baseUrl: host });
const Account = connection.Account;
const credentials = generateCiCredentials();
const dir = './test';

const createAccount = () => {
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
          console.log('Account was created')
      });
  });
}
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

if (process.argv[2] !== 'test/main_test.js') {
  createAccount();
}

export default { createAccount };
