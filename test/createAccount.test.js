const sinon = require('sinon');
const { expect } = require('chai');
const functions = require('../createAccount');

describe('Test createAccount.js', function () {
  var apiResponse = {
    apiKey: '43kdf34f3f5kg',
    instanceName: 'name',
    accountEmail: 'email',
    password: '3423423fdsfds'
  };
  var result = sinon.stub(functions, 'createAccount').returns(apiResponse);

  it('should create a correct instance', function() {

    expect(result()).to.be.equal(apiResponse);
  });
});
