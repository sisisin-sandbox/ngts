import assert = require('power-assert');
import { HelloService } from '../src/modules/service';

describe('HelloService', () => {
  let sut: HelloService;
  beforeEach(() => sut = new HelloService());
  it('return "hello"', () => {
    assert('hello service' === sut.hello()); 
  });
  it('return empty entity', () => {
    assert.deepStrictEqual({hogeStr: '', fugaNum: null }, sut.entity());
  });
});
