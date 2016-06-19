'use strict';
(function(){

class ArtistComponent {
  constructor(Auth, $scope, $http, $mdToast, MediaList) {
    this.message = 'Hello';
    this.Auth = Auth;
    this.$scope = $scope;
    this.$http = $http;
    this.$scope.currentUser = this.Auth.getCurrentUser();
    console.log(this.$scope.currentUser);
    this.$scope.artist;
    this.$scope.isOpen = false;
  }
}

angular.module('mvpApp')
  .component('artist', {
    templateUrl: 'app/artist/artist.html',
    controller: ArtistComponent
  });

})();
