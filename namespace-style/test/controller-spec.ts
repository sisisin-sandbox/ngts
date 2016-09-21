import assert = require('power-assert');
const {HelloController} = app;

require('angular-mocks');
const inject = angular.mock.inject;

describe('karma', () => {
  let sut: app.HelloController;
  beforeEach(() => {
    angular.mock.module('app');

    inject((_$controller_: ng.IControllerService) => {
      sut = _$controller_<app.HelloController>('HelloController');
    });
  });

  it('works!', () => {
    assert(sut.hello() === 'hello service');
  });
});
