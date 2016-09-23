import assert = require('power-assert');
const {appHelloDirective} = app;

require('angular-mocks');
const inject = angular.mock.inject;

describe('appHelloDirective', () => {
  let $compile: ng.ICompileService, $rootScope: ng.IRootScopeService;
  let elm: JQuery;
  let scope: app.IHogeScope;
  let sut: app.IHogeScope;

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.module('templates');

    inject((_$compile_: ng.ICompileService, _$rootScope_: ng.IRootScopeService) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      scope = <app.IHogeScope>$rootScope.$new();
      scope.hoge = 'hoge';
      elm = $compile(`<app-hello-directive hoge="hoge" />`)(scope);
      scope.$digest();
      sut = <app.IHogeScope>elm.isolateScope();
    });
  });

  it('init hoge', () => {
    assert(sut.hoge === 'hoge');
  });
  it('init upper', () => {
    assert(sut.upper === 'HOGE');
  });
  it('updated upper when hoge is changed', () => {
    scope.hoge = 'fuga';
    scope.$digest();
    assert(sut.upper === 'FUGA');
  });
});

describe('appWithController', () => {
  let $compile: ng.ICompileService
  let $rootScope: ng.IRootScopeService;

  beforeEach(() => {
    angular.mock.module('app');

    inject((_$compile_: ng.ICompileService, _$rootScope_: ng.IRootScopeService) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it('binded property "foo"', () => {
    let scope = <any>$rootScope.$new();
    scope.foo = 'foovalue';

    const elm = $compile(`<app-with-btc foo="foo"></app-with-btc>`)(scope);
    scope.$digest();
    const ctrl = <app.AppWithBtcCtrl>elm.data().$appWithBtcController;

    assert(ctrl.foo === 'foovalue');
  });
});
