'use strict';
(function(){

class ArtistComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('mvpApp')
  .component('artist', {
    templateUrl: 'app/artist/artist.html',
    controller: ArtistComponent
  });

})();
