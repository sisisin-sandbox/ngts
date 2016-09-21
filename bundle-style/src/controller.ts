import {HelloService} from './service';

export class HelloController {
  public tm = 0;
  public hogeStr = 'hogestr';
  constructor(private $timeout: ng.ITimeoutService
  , private HelloService: HelloService) {
    $timeout(() => {this.tm++;}, 1000);
  }
  hello() { return this.HelloService.hello(); }
}