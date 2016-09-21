namespace app {
  export interface IHogeScope extends ng.IScope {
    hoge: string;
  }
  export function appHelloDirective(): ng.IDirective {
    return {
      restrict: 'E',
      scope: { hoge: '=' },
      templateUrl: '/views/appHelloDirective.html',
      link: (scope: IHogeScope) => {
        if (!scope.hoge) scope.hoge = 'default hoge';
        scope.hoge = scope.hoge.toUpperCase();
      }
    }
  }
  angular.module('app').directive('appHelloDirective', appHelloDirective);
}
