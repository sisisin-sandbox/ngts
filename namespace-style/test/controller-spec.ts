import assert = require('power-assert');
const {HelloController} = app;

require('angular-mocks');
const inject = angular.mock.inject;

describe('karma', () => {
  let $controller: ng.IControllerService;

  beforeEach(() => {
    angular.mock.module('app');

    inject((_$controller_: ng.IControllerService) => {
      $controller = _$controller_;
    });
  });

  it('set $timeout 1000ms', () => {
    const sut = $controller<app.HelloController>('HelloController', {
      $timeout(cb, time) {
        assert(time === 1000);
      }
    });
  });
  it('increment tm after $timeout fired', () => {
    const sut = $controller<app.HelloController>('HelloController', {
      $timeout(cb, time) {
        cb();
      }
    });
    assert(sut.tm === 2);
  });
  it('hello called HelloService.hello()', () => {
    const sut = $controller<app.HelloController>('HelloController', {
      HelloService: {
        hello() { assert.ok; }
      }
    });
    sut.hello();
  });
});

describe('AppWithBtcCtrl', () => {
  let sut: app.AppWithBtcCtrl;
  let scope: ng.IScope;
  beforeEach(() => {
    angular.mock.module('app');

    inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
      scope = $rootScope.$new();
      sut = $controller<app.AppWithBtcCtrl>('AppWithBtcCtrl', { $scope: scope });
      sut.foo = 'foo';
      scope.$digest();
    });
  });
  it('init', () => {
    assert(sut.bar === 'foobar');
  });
  it('changed foo', () => {
    sut.foo = 'FOO';
    scope.$digest();
    assert(sut.bar === 'FOObar');
  })
});
