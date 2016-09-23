namespace app {
  export interface IHogeScope extends ng.IScope {
    hoge: string;
    upper: string;
  }
  export function appHelloDirective(): ng.IDirective {
    return {
      restrict: 'E',
      scope: { hoge: '=' },
      templateUrl: '/views/appHelloDirective.html',
      link: (scope: IHogeScope) => {
        if (!scope.hoge) scope.hoge = 'default hoge';
        scope.$watchCollection(scope.hoge, (newHoge: string) => {
          scope.upper = newHoge ? newHoge.toUpperCase() : '';
        });
      }
    };
  }
  angular.module('app').directive('appHelloDirective', appHelloDirective);

  export function appWithBtc(): ng.IDirective {
    return {
      restrict: 'E',
      scope: {},
      template: '<h1 ng-bind="$ctrl.foo"></h1>',
      bindToController: {
        foo: '='
      },
      controller: AppWithBtcCtrl,
      controllerAs: '$ctrl'
    };
  }
  angular.module('app').directive('appWithBtc', appWithBtc);
}
