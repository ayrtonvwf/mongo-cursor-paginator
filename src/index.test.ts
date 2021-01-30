import { PaginationOrder } from './index';

import * as chai from 'chai';

const expect = chai.expect;

/**
 * @see https://stackoverflow.com/a/38034825
 */
const enumLength = (value: Object) : number => Object.keys(value).length / 2;

describe('The PaginationOrder', () => {
  it('should include two options' , () => {
    expect(enumLength(PaginationOrder)).to.equal(2);
  });
});
