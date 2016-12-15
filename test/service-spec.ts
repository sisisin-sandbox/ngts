import assert = require('power-assert');

describe('HelloService', () => {
  it('return "hello"', () => {
    const sut = new app.HelloService();
    assert('hello service' === sut.hello()); 
  });
});
