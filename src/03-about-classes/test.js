"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var chai = require("chai");
var expect = chai.expect;
describe('about classes', function () {
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) { return Object
            .getOwnPropertyNames(baseCtor.prototype)
            .forEach(function (name) { return derivedCtor.prototype[name] = baseCtor.prototype[name]; }); });
    }
    it('1-your first class', function () {
        var SuperHero = /** @class */ (function () {
            function SuperHero(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            SuperHero.prototype.talk = function () {
                return "My favourite saying is : Hi my name is " + this.firstname + " " + this.lastname;
            };
            return SuperHero;
        }()); // _
        var hero = new SuperHero('Bruce', 'Wayne');
        expect(hero.talk()).to.equal('My favourite saying is : Hi my name is Bruce Wayne');
    });
    it('2-you can use getter and setters', function () {
        var Person = /** @class */ (function () {
            function Person(firstname, lastname) {
                this.fullName = firstname + " " + lastname;
            }
            return Person;
        }()); // _
        var person = new Person('John', 'Doe');
        expect(person.fullName).to.equal('John Doe');
        person.fullName = 'Jane Doe';
        expect(person.fullName).to.equal('Jane Doe');
    });
    it('3-implement an interface', function () {
        var Developer = /** @class */ (function () {
            function Developer(sFavouriteLanguage) {
                this.favouriteLanguage = sFavouriteLanguage;
            }
            Developer.prototype.sayHi = function () {
                return "Hello my favourite language is " + this.favouriteLanguage;
            };
            return Developer;
        }()); // _
        var developer = new Developer('TypeScript');
        expect(developer.sayHi()).to.equal('Hello my favourite language is TypeScript');
    });
    it('4-extend an other class', function () {
        var SuperHero = /** @class */ (function () {
            function SuperHero(name, ability) {
                this.name = name;
                this.ability = ability;
            }
            SuperHero.prototype.talk = function () {
                return "I fight against evil with " + this.ability;
            };
            return SuperHero;
        }());
        var Sidekick = /** @class */ (function (_super) {
            __extends(Sidekick, _super);
            function Sidekick(name, ability, superHero) {
                var _this = _super.call(this, name, ability) || this;
                _this.superHero = superHero;
                return _this;
            }
            Sidekick.prototype.talk = function () {
                return "I fight against evil with " + this.ability + " and my master is " + this.superHero.name;
            };
            return Sidekick;
        }(SuperHero)); // _
        var batman = new SuperHero('Batman', 'Martial arts');
        var robin = new Sidekick('Robin', 'Stick', batman);
        expect(robin.talk()).to.equal('I fight against evil with Stick and my master is Batman');
    });
    it('5-share methods like in pure JS', function () {
        var Developer = /** @class */ (function () {
            function Developer(favouriteLanguage) {
                this.favouriteLanguage = favouriteLanguage;
            }
            Developer.prototype.sayHi = function () {
                return "Hello my favourite language is " + this.favouriteLanguage;
            };
            return Developer;
        }());
        var developer = new Developer('JavaScript');
        expect(developer.sayHi.call(new Developer('TypeScript')))
            .to.equal('Hello my favourite language is TypeScript');
    });
    it('6-mix it', function () {
        var BackDeveloper = /** @class */ (function () {
            function BackDeveloper() {
            }
            BackDeveloper.prototype.writeCSharp = function () {
                return true;
            };
            BackDeveloper.languages = ['CSharp'];
            return BackDeveloper;
        }());
        var FrontDeveloper = /** @class */ (function () {
            function FrontDeveloper() {
            }
            FrontDeveloper.prototype.writeTypeScript = function () {
                return true;
            };
            FrontDeveloper.prototype.writeJavaScript = function () {
                return true;
            };
            FrontDeveloper.languages = ['JavaScript', 'TypeScript'];
            return FrontDeveloper;
        }());
        var FullStackDeveloper = /** @class */ (function () {
            function FullStackDeveloper() {
            }
            FullStackDeveloper.prototype.talk0 = function () {
                return "Hello I'm a FullStackDeveloper and I know " + FullStackDeveloper.languages.join(' and ');
            };
            FullStackDeveloper.prototype.talk = function () {
                var currentLanguage = [];
                for (var _i = 0, _a = FullStackDeveloper.languages; _i < _a.length; _i++) {
                    var language = _a[_i];
                    if (this['write' + language] && this['write' + language]()) {
                        currentLanguage.push(language);
                    }
                }
                if (currentLanguage.length === 0) {
                    currentLanguage = FullStackDeveloper.languages;
                }
                return "Hello I'm a " + this.constructor['name'] + " and I know " + currentLanguage.join(' and ');
            };
            FullStackDeveloper.languages = BackDeveloper.languages.concat(FrontDeveloper.languages);
            return FullStackDeveloper;
        }()); // _
        var developer = new FullStackDeveloper();
        expect(developer.talk())
            .to.equal('Hello I\'m a FullStackDeveloper and I know CSharp and JavaScript and TypeScript');
        expect(developer.talk.call(new BackDeveloper()))
            .to.equal('Hello I\'m a BackDeveloper and I know CSharp');
        expect(developer.talk.call(new FrontDeveloper()))
            .to.equal('Hello I\'m a FrontDeveloper and I know JavaScript and TypeScript');
    });
});
