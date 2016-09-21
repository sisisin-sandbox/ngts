namespace app {
  export class HelloService {
    hello() { return 'hello service'; }
  }
  angular.module('app').service('HelloService', HelloService);
}
