'use strict';

angular.module('myApp.myComponent', [])

.component('myComponent', {
  templateUrl: 'components/myComponent/myComponent.html',
  controller: MyComponentController,
  bindings: {

  }
});

function MyComponentController() {
    this.myVar = "this is the value of myVar";
}
