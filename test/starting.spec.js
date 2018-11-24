var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test', function () {
    it('should deal with objects', function () {
        var obj = { name: 'Jon', gender: 'male' };

        obj.should.have.property('name');
    })
    it('should allow testing nulls', function () {
        var iAmNull = null;
        should.not.exist(iAmNull);
    })
})