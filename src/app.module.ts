import { NgModule, Component, Pipe, PipeTransform, Injectable, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

@Injectable()
export class BarService {
  bar() {
    console.log('bar');
  }
}
angular.module('app').service('BarService', downgradeInjectable(BarService));

@Component({
  selector: 'app-ng2-component',
  template: `<div>my ng2 component<app-child></app-child></div>`
})
class AppNg2Component implements OnInit {
  constructor(private barService: BarService) { }
  ngOnInit() {
    this.barService.bar();
  }
}
angular.module('app').directive('appNg2Component', downgradeComponent({ component: AppNg2Component }));

@Component({
  selector: 'app-child',
  template: `<div>{{text | foopipe}}</div>`
})
class ChildComponent {
  text = 'child!!!';
}


@Pipe({ name: 'foopipe' })
class FooPipe implements PipeTransform {
  transform(input: string) {
    return input.toUpperCase();
  }
}
angular.module('app').filter('foopipe', downgradeInjectable(FooPipe));

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [AppNg2Component, ChildComponent, FooPipe],
  providers: [BarService],
  entryComponents: [AppNg2Component]
})
export class AppModule {
  ngDoBootstrap() { }
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['app']);
});
