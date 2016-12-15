/*
machinepack exec organization-request --organizationInfo='{"teamName": "Austin Boom","teamSport": "soccer","ownerFirstName": "John","ownerLastName": "Due","ownerDOB": "12/12/1990","ownerSSN": "123456789","ownerEmail": "austin@boom.com","ownerPhone": "1234567890","country": "US","state": "TX","city": "Austin","zipCode": "12345","EIN": "123123123","Address": "calle fake","AddressLineTwo": "123","businessName": "bname","phoneNumber": "bnumber","businessType": "Corporation","aba": "110000","dda": "000123456789"}' --token='puproduct-secret' --baseUrl='http://localhost:9007' --userId='123'
 */
var Connector = require('../core/common/connector')
var url = '/api/v1/organization/request/'
var config = {
  url: url,
  baseUrl: inputs.baseUrl,
  method: 'post',
  token: inputs.token
}
Connector.request(config, {}, {'organizationInfo': inputs.organizationInfo, 'userId': inputs.userId}, function (err, resp) {
  if (err) {
    return exits.error({
      status: err.status,
      message: err.message
    })
  } else {
    return exits.success({
      status: 200,
      body: resp.body
    })
  }
})