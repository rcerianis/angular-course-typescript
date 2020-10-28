"use strict";
exports.__esModule = true;
var chai = require("chai");
var expect = chai.expect;
// The line below is just here to avoid TS error at compilation
var _ = null;
//
describe('about let and const', function () {
    it('1-should be only available in a if block scope', function () {
        var myVar = 1;
        var myLet = 2;
        if (true) {
            var myVar = 3;
            var myLet_1 = 4;
        }
        expect(myVar).to.equal(3);
        expect(myLet).to.equal(2);
    });
    it('2-should be only available in a for block scope', function () {
        var forLet = 0;
        for (var forVar = 0; forVar < 10; forVar++) {
            for (var forLet_1 = 0; forLet_1 < 10; forLet_1++) {
                //do something
            }
        }
        expect(forVar).to.equal(10);
        expect(forLet).to.equal(0);
    });
    it('3-should solves some async issues', function (done) {
        var varStack = [];
        var letStack = [];
        for (var forVar = 0; forVar < 3; forVar++) {
            setTimeout(function () { return varStack.push(forVar); });
        }
        var _loop_1 = function (forLet) {
            setTimeout(function () { return letStack.push(forLet); });
        };
        for (var forLet = 0; forLet < 3; forLet++) {
            _loop_1(forLet);
        }
        setTimeout(function () {
            expect(varStack).to.equal([varStack[0], varStack[1], varStack[2]]);
            expect(letStack).to.equal(undefined);
            done();
        });
    });
    it('4-should be constant references not values', function () {
        var myConstArray = [];
        var myConstObject = {};
        var error = false;
        try {
            myConstArray.push(1);
            myConstObject.key = 'value';
        }
        catch (e) {
            error = true;
        }
        expect(error).to.be["false"]; // _ (change null by ?)
        expect(myConstObject.key).to.equal('value');
    });
});
