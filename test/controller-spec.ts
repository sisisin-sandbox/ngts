import assert = require('power-assert');
import {HelloController} from '../src/controller';

describe('HelloController', () => {
  it('hello should return "hello service"', () => {
    const HelloServiceMock = { hello() { return 'hello mock'; } };
    const sut = new HelloController(<any>(() => { }), <any>HelloServiceMock);

    assert(sut.hello() === 'hello mock');
  });
  it('hoge', () => {
    assert.deepEqual({hoge:'hoge'}, {hoge:'hoge'});
  })
});
