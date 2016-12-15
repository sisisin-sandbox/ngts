import assert = require('power-assert');
import { HelloService } from '../src/modules/service';

describe('HelloService', () => {
  it('return "hello"', () => {
    const sut = new HelloService();
    assert('hello service' === sut.hello()); 
  });
});
