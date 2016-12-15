import {HelloService} from './service';

export class HelloController {
  public tm = 1;
  public hogeStr = 'hogestr';
  constructor(private $timeout: ng.ITimeoutService
    , private HelloService: HelloService) {
    $timeout(() => { this.tm++; }, 1000);
  }
  hello() { return this.HelloService.hello(); }
}
angular.module('app').controller('HelloController', HelloController);

export class AppWithBtcCtrl {
  public foo: string;
  public bar: string;
  watchFoo = (n: string, o: string) => {
    this.bar = `${n}bar`;
  }
  constructor($scope: ng.IScope) {
    $scope.$watchCollection(() => this.foo, this.watchFoo);
  }
}
angular.module('app').controller('AppWithBtcCtrl', AppWithBtcCtrl);

