import assert = require('power-assert');
import {HelloController} from '../../src/controller';

require('angular-mocks');
const inject = angular.mock.inject;

describe('karma', () => {
  let sut: HelloController;
  beforeEach(() => {
    angular.mock.module('app');

    inject((_$controller_: ng.IControllerService) => {
      sut = _$controller_<HelloController>('HelloController');
    });
  });

  it('works!', () => {
    assert(sut.hello() === 'hello service');
  });
});
