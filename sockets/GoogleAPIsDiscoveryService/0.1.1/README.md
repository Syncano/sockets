# GoogleAPIsDiscoveryService Syncano Socket

It is GoogleAPIsDiscoveryService integration with Syncano. It allows you to work with google apis discovery service.

## Endpoints

### list

#### Parameters:

      name: 'plusDomains',
      preferred: true,
      fields: 'discoveryVersion,items(description,discoveryLink,discoveryRestUrl,documentationLink,icons,kind,labels,name,preferred,title,version,id),kind'


### get-rest

#### Parameters:

      api: 'plusDomains',
      version: 'v1',
      fields: 'servicePath,labels,name,methods,description,basePath,ownerName,etag,icons,id,discoveryVersion,kind,resources,baseUrl,packagePath,documentationLink,auth,version,title,parameters,protocol,batchPath,rootUrl,ownerDomain,canonicalName,revision,schemas,features'

