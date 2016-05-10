'use strict';

class SignupArtistController {
  constructor(Auth, $scope, $http, $mdToast, MediaList) {
    this.errors = {};
    this.Auth = Auth;
    this.$scope = $scope;
    this.$http = $http;
    this.$mdToast = $mdToast;
    //Getting MediaList Service
    this.MediaList = MediaList;
    this.$scope.mediaList = this.MediaList.getMediaList();
    console.log(this.$scope.mediaList);


    //Getting CurrentUser
    this.$scope.currentUser = this.Auth.getCurrentUser();
    console.log(this.$scope.currentUser);

    //Saving information to scope to populate form after initial save
    this.$scope.hometown = this.$scope.currentUser.hometown;
    this.$scope.hometown_state = this.$scope.currentUser.hometown_state;
    this.$scope.neighborhood = this.$scope.currentUser.neighborhood;
    this.$scope.dob = this.$scope.currentUser.dob;
    this.$scope.medium = this.$scope.currentUser.medium;
    this.$scope.genre = this.$scope.currentUser.genre;
    this.$scope.experience = this.$scope.currentUser.experience;
    this.$scope.website = this.$scope.currentUser.website;
    this.$scope.instagram = this.$scope.currentUser.instagram;
    this.$scope.twitter = this.$scope.currentUser.twitter;
    this.$scope.store = this.$scope.currentUser.store;
    this.$scope.soundcloud = this.$scope.currentUser.soundcloud;
    this.$scope.behance = this.$scope.currentUser.behance;
    this.$scope.bandcamp = this.$scope.currentUser.bandcamp;
    this.$scope.spotify = this.$scope.currentUser.spotify;

    // TODO: Reload page if user navigates to ArtistSignup, so that we fetch most up-to-date data



  	//TODO: Add in New Orleans Neighborhoods
  	this.$scope.neighborhoods = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(neighborhood) {
        return {abbrev: neighborhood};
      })
  }


  loadGenres(medium){
  	this.$scope.selectedMedium = medium.name;
  	this.$scope.genreList = medium.genre;
  	console.log(this.$scope.selectedMedium);
  }

  showToast($mdToast){
  	console.log('shit worked');
  	 this.$mdToast.show(
      this.$mdToast.simple()
        .textContent('Saved.')
        .position('left')
        .hideDelay(3000)
        .parent('#saveBasics')
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
  		// TODO: ADD animation here
  		context.showToast();
  	})
  }

  registerArt(){
  	let context = this;
  	this.$http.put('/api/users/' + this.$scope.currentUser._id + '/updateArtistArt', {
  		medium: context.$scope.medium,
  		genre: context.$scope.genre,
  		experience: context.$scope.experience,
  	}).then(function(){
  		// TODO: ADD animation here
  		context.showToast();
  	})
  }

  registerProperties(){
  	let context = this;
  	this.$http.put('/api/users/' + this.$scope.currentUser._id + '/updateArtistProperties', {
  		website: context.$scope.website,
  		instagram: context.$scope.instagram,
  		twitter: context.$scope.twitter,
  		store:context.$scope.store,
  		soundcloud: context.$scope.soundcloud,
  		behance: context.$scope.behance,
  		bandcamp: context.$scope.bandcamp,
  		spotify:context.$scope.spotify,
  	}).then(function(){
  		// TODO: ADD animation here
  		context.showToast();
  	})
  }
}


angular.module('mvpApp')
  .controller('SignupArtistController', SignupArtistController);
