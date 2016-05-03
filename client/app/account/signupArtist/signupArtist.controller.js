'use strict';
(function(){

class SignupArtistComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('mvpApp')
  .component('signupArtist', {
    templateUrl: 'app/account/signupArtist/signupArtist.html',
    controller: SignupArtistComponent
  });

})();
