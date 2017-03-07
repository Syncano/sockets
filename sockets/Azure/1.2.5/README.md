# Azure Syncano Socket

It is Azure integration with Syncano. It allows you to work with the microsoft azure api.

## Endpoints

### list-images

#### Parameters:

      subscriptionId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx',
      certificate: '-----BEGIN CERTIFICATE-----
xxxxxxxxxxxx
xxxxxxxxxxxx
xxxxxxxxxxxx
........
xxxxxxxxxxxx
-----END CERTIFICATE-----'


### register-azure-account

#### Parameters:



### set-azure-account

#### Parameters:

      subNameOrId: 'johndoe'


### check-active-subscription

#### Parameters:



### create-website

#### Parameters:

      name: 'mywebsite',
      location: 'West US'


### exists-website

#### Parameters:

      name: 'mywebsitename'


### upload-webjob

#### Parameters:

      deploymentUser: 'johndoe',
      deploymentPassword: 'p@ssw0rd',
      fileLocation: '/mypath/myscript.sh',
      website: 'mysite'


### trigger-webjob

#### Parameters:

      deploymentUser: 'johndoe',
      deploymentPassword: 'p@ssw0rd',
      name: 'myscript.ps1',
      website: 'mysite'


### info-webjob

#### Parameters:

      deploymentUser: 'johndoe',
      deploymentPassword: 'p@ssw0rd',
      name: 'myscript.ps1',
      website: 'mysite'


### log-webjob

#### Parameters:

      deploymentUser: 'johndoe',
      deploymentPassword: 'p@ssw0rd',
      name: 'myscript.ps1',
      website: 'mysite'


### upload-file

#### Parameters:

      deploymentUser: 'johndoe',
      deploymentPassword: 'p@ssw0rd',
      fileLocation: '',
      remotePath: '/site/wwwroot/myfile.zip',
      website: 'mysite'


### set-deploy-credentials

#### Parameters:

      deploymentUser: 'johndoe',
      deploymentPassword: 'p@ssword'


### list-azure-accounts

#### Parameters:


