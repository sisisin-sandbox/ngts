import assert = require('power-assert');
import {IHogeScope, appHelloDirective} from '../../src/directive';

require('angular-mocks');
const inject = angular.mock.inject;

describe('Directives', () => {
  let sut = appHelloDirective();
  let $compile: ng.ICompileService, $rootScope: ng.IRootScopeService;

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.module('templates');

    inject((_$compile_: ng.ICompileService, _$rootScope_: ng.IRootScopeService) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it('hell-directive works!', () => {
    let scope = <IHogeScope>$rootScope.$new();
    scope.hoge = 'hoge';
    const erm = $compile(`<app-hello-directive hoge="hoge" />`)(scope);
    scope.$digest();
    assert(scope.hoge === 'HOGE');
  });
});
