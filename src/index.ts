angular.module('app', ['ngRoute']);
angular
  .module('app')
  .config(($routeProvider: ng.route.IRouteProvider) =>
    $routeProvider
      .when('/login', {
        template: '<app-text-component></app-text-component>'
      })
      .when('/', {template: 'hogehogehoge'}));

import './modules/controller';
import './modules/component';
import './modules/directive';
import './modules/service';

angular.bootstrap(document.body, ['app']);
