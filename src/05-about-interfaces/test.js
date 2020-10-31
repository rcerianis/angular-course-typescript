"use strict";
exports.__esModule = true;
var chai = require("chai");
var expect = chai.expect;
describe('about interfaces', function () {
    it('1-describes an object', function () {
        var person = {
            firstName: 'John'
        };
        expect(person.firstName).to.equal(_);
    });
    it('2-should be possible to use it as a type', function () {
        // _
        var person = {
            firstName: 'John'
        };
        expect(person.firstName).to.equal(_);
    });
    it('3-can be extended', function () {
        // _
        //var person: _ = {
        var person = {
            gender: 'male',
            firstName: 'John'
        };
        //expect(person.gender).to.equal( _ );
        expect(person.gender).to.equal('male'); //O.K.
        //expect(person.firstName).to.equal( _ );
        expect(person.firstName).to.equal('John'); //O.K.
    });
    it('4-can have optional properties', function () {
        //var person: _ = {
        var person = {
            firstName: 'John'
        };
        //expect(person.firstName).to.equal( _ );
        expect(person.firstName).to.equal('John'); //O.K.
        //expect(person.lastName).to.equal( _ );
        expect(person.lastName).to.equal(undefined); //O.K.
    });
    it('5-can have readonly properties', function () {
        // _
        var error = false;
        var person = {
            firstName: 'John'
        };
        try {
            person.firstName = 'Jane';
        }
        catch (e) {
            error = true;
        }
        expect(error).to.be._;
        expect(person.firstName).to.equal(_);
    });
    it('6-can describe maps', function () {
        // _
        var contacts = {
            johnId: {
                firstName: 'John'
            }
        };
        expect(contacts['johnId'].firstName).to.equal(_);
    });
    it('7-readonly maps', function () {
        // _
        var error = false;
        var contacts = {
            johnId: {
                firstName: 'John'
            }
        };
        try {
            contacts['johnId'].firstName = 'Jane';
        }
        catch (e) {
            error = true;
        }
        expect(error).to.be._;
        expect(contacts['johnId'].firstName).to.equal(_);
    });
    it('8-describes function', function () {
        var greet = function (name) {
            return "Hello " + name;
        }; // _ O.K.
        expect(greet('John')).to.equal('Hello John');
    });
    it('9-can have multiple signatures and properties', function () {
        var greet = function (firstName, lastName) {
            return "Hello " + firstName + (lastName ? ' ' + lastName : '');
        }; // _ O.K.
        // _
        greet.foo = 'bar'; // O.K.
        expect(greet('John')).to.equal('Hello John');
        expect(greet('John', 'Doe')).to.equal('Hello John Doe');
        expect(greet.foo).to.equal('bar');
    });
    it('10-describes constructor', function () {
        var Person = /** @class */ (function () {
            function Person(firstName) {
                this.firstName = firstName;
            }
            return Person;
        }());
        ; // _ O.K.
        expect(new Person('John').firstName).to.equal('John');
    });
});
