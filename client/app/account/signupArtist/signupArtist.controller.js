'use strict';

class SignupArtistController {
  constructor(Auth, $scope) {
    this.errors = {};
    this.Auth = Auth;
    this.$scope = $scope;

    //Getting CurrentUser
    this.$scope.currentUser = this.Auth.getCurrentUser();
  	// TODO:Add name_last to Signup
  	// TODO: Add name_artist to User
  	
  	this.$scope.neighborhoods = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(neighborhood) {
        return {abbrev: neighborhood};
      })
  }

}

angular.module('mvpApp')
  .controller('SignupArtistController', SignupArtistController);
