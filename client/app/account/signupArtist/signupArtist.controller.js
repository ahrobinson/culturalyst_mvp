'use strict';

class SignupArtistController {
  constructor(Auth, $scope, $http, $mdToast) {
    this.errors = {};
    this.Auth = Auth;
    this.$scope = $scope;
    this.$http = $http;
    this.$mdToast = $mdToast;


    //Getting CurrentUser
    this.$scope.currentUser = this.Auth.getCurrentUser();


  	//TODO: Add in New Orleans Neighborhoods
  	this.$scope.neighborhoods = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(neighborhood) {
        return {abbrev: neighborhood};
      })
  }

  showToast($mdToast){
  	console.log('shit worked');
  	 this.$mdToast.show(
      this.$mdToast.simple()
        .textContent('We got you. Basics saved.')
        .position('left')
        .hideDelay(3000)
    );
  }

  registerBasics() {
  	let context = this;

  	this.$http.put('/api/users/' + this.$scope.currentUser._id + '/updateArtistBasics', {
  		dob: context.$scope.dob,
  		neighborhood:context.$scope.neighborhood,
  		hometown: context.$scope.hometown,
  		hometown_state: context.$scope.hometown_state,
  	}).then(function(){
  		context.showToast();
  	})
  }
}

angular.module('mvpApp')
  .controller('SignupArtistController', SignupArtistController);
