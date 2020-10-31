import * as chai from 'chai';
var expect = chai.expect;

describe('about interfaces', () => {
  it('1-describes an object', () => {
    //var person : _ = {
    var person : any = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal( 'John' );//O.K.
  });

  it('2-should be possible to use it as a type', () => {
    // _
    interface IPerson {
      firstName: string;
    }

    //var person: _ = {
    var person: IPerson = {
      firstName: 'John'
    };
    //expect(person.firstName).to.equal( _ );
    expect(person.firstName).to.equal( 'John' );//O.K.
  });

  it('3-can be extended', () => {
    interface IAnimal {
      gender: string;
    }

    // _

    //var person: _ = {
    var person: IAnimal = {
      gender: 'male',
      firstName: 'John'
    };
    //expect(person.gender).to.equal( _ );
    expect(person.gender).to.equal( 'male' );//O.K.
    //expect(person.firstName).to.equal( _ );
    expect(person.firstName).to.equal( 'John' );//O.K.
  });

  it('4-can have optional properties', () => {
    // _
    interface IPerson {
      lastName?: string;
    }

    //var person: _ = {
    var person: IPerson = {
      firstName: 'John'
    };

    //expect(person.firstName).to.equal( _ );
    expect(person.firstName).to.equal( 'John' );//O.K.
    //expect(person.lastName).to.equal( _ );
    expect(person.lastName).to.equal( undefined );//O.K.
  });

  it('5-can have readonly properties', () => {
    // _
    interface IPerson {
      readonly firstName: string;
    }

    var error: boolean = false;
    //var person: _ = {
    const person: IPerson = {
      firstName: 'John'
    };
person.firstName='toto';
console.log('toto2?');

    try {
      console.log('Avant');
      person.firstName = 'Jane';
      console.log('Après');
    }
    catch (e) {
      error = true;
    }

    //expect(error).to.be._;
    expect(error).to.be.true;
    //expect(person.firstName).to.equal( _ );
    expect(person.firstName).to.equal( 'John' );
  });

  it('6-can describe maps', () => {
    interface IPerson {
      readonly firstName: string;
    }

    // _

    var contacts: _ = {
      johnId: {
        firstName: 'John'
      }
    };

    expect(contacts['johnId'].firstName).to.equal( _ );
  });

  it('7-readonly maps', () => {
    interface IPerson {
      readonly firstName: string;
    }

    // _

    var error: boolean = false;
    var contacts: _ = {
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
    expect(contacts['johnId'].firstName).to.equal( _ );
  });

  it('8-describes function', () => {
    interface IGreeter {
      (name: string): string;
    }

    const greet: IGreeter = (name: string) => {
      return `Hello ${name}`
    }; // _ O.K.

    expect(greet('John')).to.equal('Hello John');
  });

  it('9-can have multiple signatures and properties', () => {
    interface IGreeter {
      (firstName: string): string;
      (firstName: string, lastName: string): string;
      foo?: string;
    }

    const greet: IGreeter = (firstName: string, lastName?: string) => {
      return `Hello ${firstName}${lastName ? ' ' + lastName : ''}`
    }; // _ O.K.
    // _
    greet.foo = 'bar';// O.K.

    expect(greet('John')).to.equal('Hello John');
    expect(greet('John', 'Doe')).to.equal('Hello John Doe');
    expect(greet.foo).to.equal('bar');
  });

  it('10-describes constructor', () => {
    interface IPerson {
      firstName: string;
    }

    interface IPersonConstructor {
      new (firstName: string): IPerson;
    }

    class Person implements IPersonConstructor {
      constructor(firstName: string): IPerson {
        this.firstName = firstName;
      }
    }; // _ O.K.

    expect(new Person('John').firstName).to.equal('John');
  });
});
