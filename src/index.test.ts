import defaultHelloWorld, { helloWorld } from './index';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('The Hello World function', () => {
  it('should greet us with' , () => {
    expect(helloWorld()).to.equal('Hello World');
  });
});

describe('The default export', () => {
  it('should be equal to the named export', () => {
    expect(helloWorld).to.equal(defaultHelloWorld)
  });
});
