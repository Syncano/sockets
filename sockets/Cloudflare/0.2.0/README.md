# Cloudflare Syncano Socket

It is Cloudflare integration with Syncano. It allows you to works with the cloudflare api.

## Endpoints

### delete-dns-record

#### Parameters:

      token: '8afbe6dea02407989af4dd4c97bb6e25',
      email: 'sample@example.com',
      domain: 'example.com',
      recordId: '9001'

,
### add-dns-record

#### Parameters:

      token: '8afbe6dea02407989af4dd4c97bb6e25',
      email: 'sample@example.com',
      domain: 'example.com',
      type: 'A',
      name: 'sub',
      content: '96.126.126.36',
      ttl: '1'

,
### edit-dns-record

#### Parameters:

      token: '8afbe6dea02407989af4dd4c97bb6e25',
      email: 'sample@example.com',
      domain: 'example.com',
      recordId: '9001',
      type: 'A',
      name: 'sub',
      content: '96.126.126.36',
      ttl: '1',
      onCloudflare: 1

,
### stats

#### Parameters:

      token: '8afbe6dea02407989af4dd4c97bb6e25',
      email: 'sample@example.com',
      domain: 'example.com',
      interval: 20

