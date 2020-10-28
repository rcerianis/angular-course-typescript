"use strict";
exports.__esModule = true;
var chai = require("chai");
var expect = chai.expect;
describe('about destructuring arrays', function () {
    it('1-should extract value from array', function () {
        var firstValue = [1][0]; // _
        expect(firstValue).to.equal(1);
    });
    it('2-should swap two variables, in one operation', function () {
        var _a;
        var _b = ['ax', 'why'], x = _b[0], y = _b[1];
        _a = [x, y], x = _a[0], y = _a[1];
        expect([y, x]).to.eql(['why', 'ax']); // _
    });
    it('3-should count leading commas', function () {
        var all = ['ax', 'why', 'zet'];
        var z = all[1];
        expect([all[2]]).to.eql(['zet']); // _
    });
    it('4-should extract from nested arrays', function () {
        var user = [['Some', 'One'], 23];
        //const [firstName, surname, age] = user; // _
        var _a = user[0], firstName = _a[0], surname = _a[1], age = user[1]; // _
        expect(firstName + " " + surname + " = " + age + " years").to.equal('Some One = 23 years');
    });
    it('5-should chain assignments', function () {
        var _a;
        var c, d;
        var a, b = (_a = [1, 2], c = _a[0], d = _a[1], _a);
        //    expect([a, b, c, d]).to.eql([1, 2, 1, 2]); // _
        expect(b.concat(b)).to.eql([1, 2, 1, 2]); // _
    });
    it('6-should work in for-of loop', function () {
        for (var _i = 0, _a = [[0, 1, 2]]; _i < _a.length; _i++) {
            var _b = _a[_i], a = _b[0], b = _b[1];
        }
        //    expect([a, b]).to.eql([1, 2]); // _
        expect([b, b + 1]).to.eql([1, 2]); // _
    });
});
describe('about destructuring objects', function () {
    it('1-should be simple', function () {
        //    const x = { x: 1 }; // _
        var x = { x: 1 }.x; // _
        expect(x).to.equal(1);
    });
    it('2-should find variables properties', function () {
        var magic = { first: 23, second: 42 };
        //    const {magic: second} = { magic }; // _
        var second = { magic: magic }.magic; // _
        expect(second).to.equal(42); //K.O.
    });
    it('3-should mix object and array', function () {
        //    const {z: [x]} = { z: [23, 42] };
        var _a = { z: [23, 42] }.z, x = _a[1];
        //    expect(x).to.equal(42); // _
        expect(x).to.equal(42); // _
    });
    it('4-should mix array and object', function () {
        //    const [, [lang]] = [null, [{ env: 'browser', lang: 'ES6' }]]; // _
        var _a = [null, [{ env: 'browser', lang: 'ES6' }]], lang = _a[1][0]; // _
        expect(lang).to.equal('ES6'); //K.O.
    });
    it('5-should missing refs become undefined ?', function () {
        //    const {z} = { x: 1, z: 2 }; // _
        var _a = { x: 1 }, x = _a.x, z = _a.z; // _
        expect(z).to.equal(undefined);
    });
    it('6-should destructure from builtins (string)', function () {
        //    const {substr} = 1; // _
        var substr = new String(1).substr; // _
        expect(substr).to.equal(String.prototype.substr);
    });
});
