import sinon from 'sinon';
import { expect } from 'chai';
import functions from '../test';

const {
  getSocket,
  deleteSocket,
  whiteListMachine,
  deleteFolder,
  checkIfInstalled,
  createZip,
  deleteZip,
  installSocket
} = functions;

describe('Test test.js', function () {
  describe('getSocket', function () {
    let name = 'name';
    const result = sinon.stub(functions, 'getSocket')

    it('should get a correct parameter', function() {
      result(name);

      sinon.assert.called(result);
      sinon.assert.calledWith(result, name);
    });
    it("socket's name should be a string", function() {
      name = {};

      expect(getSocket(name)).to.be.false;
    });
  });
  describe('deleteSocket', function () {
    let name = 'name';
    var result = sinon.stub(functions, 'deleteSocket')

    it('should get a correct parameter', function() {
      result(name);

      sinon.assert.called(result);
      sinon.assert.calledWith(result, name);
    });
    it("socket's name should be a string", function() {
      name = {};

      expect(deleteSocket(name)).to.be.false;
    });
  });

  describe('whiteListMachine', function () {
    var name = { identity: 'firstName' }; 
    var blackList = [
      'firstName',
      'secondName',
      'thirdName'
    ];

    it('should get correct parameters', function() {

      expect(whiteListMachine(name, blackList)).to.be.true;
    });

    it('parameters should have correct types', function() {

      expect(whiteListMachine(name, blackList)).to.be.true;
    });
  });

  describe('deleteFolder', function () {
    let name = 'name';
    var result = sinon.stub(functions, 'deleteFolder')

    it('should get a correct parameter', function() {
      result(name);

      sinon.assert.called(result);
      sinon.assert.calledWith(result, name);
    });
    it("socket's name should be a string", function() {
      name = {};

      expect(deleteFolder(name)).to.be.false;
    });
  });

  describe('checkIfInstalled', function () {
    let name = 'name';
    var result = sinon.stub(functions, 'checkIfInstalled')

    it('should get a correct parameter', function() {
      result(name);

      sinon.assert.called(result);
      sinon.assert.calledWith(result, name);
    });
    it("socket's name should be a string", function() {
      name = {};

      expect(checkIfInstalled(name)).to.be.false;
    });
  });

  describe('createZip', function () {
    let name = 'name';
    let version = "1.0.0";
    var result = sinon.stub(functions, 'createZip')

    it('should get correct parameters', function() {
      result(name, version);

      sinon.assert.called(result);
      sinon.assert.calledWith(result, name);
    });
    it("parameters should have correct types", function() {
      name = {};
      version = [];

      expect(createZip(name, version)).to.be.false;
    });
  });

  describe('deleteZip', function () {
    let name = 'name';
    var result = sinon.stub(functions, 'deleteZip')

    it('should get a correct parameter', function() {
      result(name);

      sinon.assert.called(result);
      sinon.assert.calledWith(result, name);
    });
    it("zip's name should be a string", function() {
      name = {};

      expect(deleteZip(name)).to.be.false;
    });
  });

  describe('installSocket', function () {
    let name = 'name';
    let path = `/v2/instances/instanceName/sockets/`;
    var result = sinon.stub(functions, 'installSocket')

    it('should get correct parameters', function() {
      result(name, path);

      expect(result.withArgs(name, path).called).to.be.true;
    });
    it("parameters should have correct types", function() {
      name = {};
      path = [];

      expect(installSocket(name, path)).to.be.false;
    });
  });
}); 