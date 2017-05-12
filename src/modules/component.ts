const appTextComponent: ng.IComponentOptions = {
  template: `
<div>{{ctrl.text}}</div>
`,
  controller: class {
    public text = 'text!!!!';
    constructor() {}
  },
  controllerAs: 'ctrl'
};

angular.module('app').component('appTextComponent', appTextComponent);
