'use strict';
(function(){

class DiscoveryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('mvpApp')
  .component('discovery', {
    templateUrl: 'app/discovery/discovery.html',
    controller: DiscoveryComponent
  });

})();
