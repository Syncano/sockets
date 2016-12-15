import sinon from 'sinon';
import { expect } from 'chai';
import functions from '../createSockets';

const { 
  renderEndpoints,
  createDirs,
  createYamlInput,
  createScript,
  whiteListMachine,
  createSockets 
} = functions;

describe('Test createSockets.js', function () {

  describe('renderEndpoints', function () {
    let array = [];
    beforeEach(function() {
      array = [
        {
          identity: 'firstScript', 
          description: 'first description'
        },
        {
          identity: 'secondScript', 
          description: 'second description'
        }
      ];
    })

    it('should render yaml endpoints', function () {
      const result = renderEndpoints(array);

      expect(result).to.deep.contain({
        firstScript: {
          POST: {
            file: 'scripts/firstScript.js',
            description: 'first description'
          }
        }
      });
    });

    it('should be an array', function () {
      const result = renderEndpoints(array);

      expect(result).to.be.an('array')
    });

    it('should be an empty array', function () {

      array = [];
      const result = renderEndpoints(array);

      expect(result.length).to.equal(array.length)
    });

    it('should have the same length as input', function () {
      const result = renderEndpoints(array);

      expect(result.length).to.equal(array.length)
    });

    it('should have no identity nor description', function () {
      array = [
      {
        firstWrongKey: 'firstScript', 
        secondWrongKey: 'first description'
       }
      ];
      const result = renderEndpoints(array);

      expect(...result).to.be.false
      });
  });

  describe('createDirs', function () {
    var dir = 'directoryName';
    var result = sinon.stub(functions, 'createDirs')

    it('should get correct parameter', function() {
      result(dir);

      expect(result.withArgs(dir).called).to.be.true;
    });

    it('argument should be a string', function() {
      var dir = {};

      expect(createDirs(dir)).to.be.false;
    });
  });

  describe('createYamlInput', function () {
    var dir = 'directoryName';
    var result = sinon.stub(functions, 'createYamlInput')
    var content = {
      name: 'name',
      description: 'description',
      author: {
        name: 'Syncano',
        email: 'hello@syncano.io'
      }
    };

    it('should get correct parameters', function() {
      result(content, dir);

      expect(result.withArgs(content, dir).called).to.be.true;
    });

    it('parameters should have correct types', function() {
      var dir = {};

      expect(createYamlInput(content, dir)).to.be.false;
    });
  });

  describe('createScript', function () {
    var dir = 'directoryName';
    var result = sinon.stub(functions, 'createScript');
    var script = {
      fn: "var elo = 'mleko'",
      identity: 'mleczarz'
    };

    it('should get correct parameters', function() {
      result(script, dir);

      expect(result.withArgs(script, dir).called).to.be.true;
    });

    it('parameters should have correct types', function() {
      var dir = {};

      expect(createScript(script, dir)).to.be.false;
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

  describe('createSockets', function () {
    var result = sinon.stub(functions, 'createSockets');

    it('should be executed at least once', function() {
      result();

      expect(result.calledOnce).to.be.true;
     });
  });
});
