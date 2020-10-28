import * as chai from 'chai';
let expect = chai.expect;

// The line below is just here to avoid TS error at compilation
const _: any = null
//

describe('about ts types', () => {
  it('1-should compile to plain javascript', () => {
    let boolean: boolean = true; // _
    let integer: number = 6; // _
    let float: number = Math.PI; // _
    let foo: string = 'bar'; // _
    expect(boolean).to.be.true;
    expect(integer).to.equal(6);
    expect(float).to.equal(Math.PI);
    expect(foo).to.equal('bar');
  });

  it('2-should type arrays', () => {
    let list: boolean[] = [true, false]; // _
    expect(list.length).to.equal(2);
  });

  it('3-should type tuples', () => {
    let tupple: [number, string] = [42, 'foo']; // _
    expect(tupple[0]).to.equal(42);
    expect(tupple[1]).to.equal('foo');
  });

  it('4-should type enums', () => {
    enum myAwesomeEnum {ACTIVE = 0, OTHER, 'INACTIVE'};
    //const myAwesomeEnum: AwesomeEnum; // _
    expect(myAwesomeEnum.ACTIVE).to.equal(0);
    expect(myAwesomeEnum[2]).to.equal('INACTIVE');
  });

  it('5-should type null and undefined', () => {
    let nullVar = null; // _
    let undefinedVar;
    expect(nullVar).to.be.null;
    expect(undefinedVar).to.be.undefined;
  });

  it('6-should work in functions arguments too', () => {
    function sayHello(name: string) {
      return 'Hello '.concat(name);
    }
    expect(sayHello('TypeScript')).to.equal('Hello TypeScript'); // replace the _
  });

  it('7-should infer the type', () => {
    function add(a: number, b: string) {
      return a + b;
    }
    expect(add(17, '25')).to.equal('1725'); // replace the _
  });
});
